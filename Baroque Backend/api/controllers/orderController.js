const orderModel = require("../models/orderModel");
const cartModel = require("../models/cartModel");
const jwt = require("jsonwebtoken");
const axios = require("axios");

const safepay = require("@sfpy/node-core")(process.env.SAFEPAY_SECRET_KEY, {
  authType: "secret",
  host: "https://sandbox.api.getsafepay.com",
});

module.exports = {
  createOrder: async function (req, res) {
    try {
      let userId = null;

   
      const token = req.headers.authorization;

      if (token) {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        userId = decoded.id;
      }

     
      const order = await orderModel.create({
        user: userId,
        products: req.body.products,
        totalPrice: req.body.totalPrice,
        shippingAddress: req.body.shippingAddress,

        paymentMethod: "safepay",
        paymentStatus: "pending",
        status: "pending",
      });

      console.log("Order bn gya:", order._id);

      const payment = await safepay.payments.session.setup({
        merchant_api_key: process.env.SAFEPAY_PUBLIC_KEY,

        intent: "CYBERSOURCE",

        mode: "payment",

        entry_mode: "raw",

        currency: "PKR",

        amount: Number(req.body.totalPrice) * 100,

        metadata: {
          order_id: order._id.toString(),
        },

        include_fees: false,
      });


      const tracker = payment?.data?.tracker?.token;

      if (!tracker) {
        return res.json({
          status: "error",
          message: "SafePay tracker nahi mila",
        });
      }

      console.log("SafePay Tracker:", tracker);

      const authToken = await safepay.client.passport.create();

      console.log("SafePay Auth Token:", authToken);

      const tbt = authToken.data;

      const checkoutURL = safepay.checkout.createCheckoutUrl({
        env: "sandbox",

        tracker: tracker,

        tbt: tbt,

        source: "hosted",

        redirect_url:  `${process.env.FRONTEND_URL}/ordersuccess`,

        cancel_url: `${process.env.FRONTEND_URL}/ordercancel`,
      });

      console.log("SafePay Checkout URL:", checkoutURL);

      return res.json({
        status: "success",

        checkoutURL: checkoutURL,

        orderId: order._id,
      });
    } catch (error) {
      console.log("Create Order Error:", error);

      return res.json({
        status: "error",
        message: error.message,
      });
    }
  },

  verifyPayment: async function (req, res) {
    try {
      const tracker = req.body.tracker;

      if (!tracker) {
        return res.json({
          status: "error",
          message: "Payment tracker missing",
        });
      }

      console.log("Verifying Tracker:", tracker);

      const payment = await safepay.reporter.payments.fetch(tracker);

      console.log("SafePay Payment:", JSON.stringify(payment, null, 2));

     
      const state = payment?.data?.state;

      console.log("Payment State:", state);

      if (state !== "TRACKER_ENDED") {
        return res.json({
          status: "error",
          message: "Payment complete nahi hui",
        });
      }

      const orderId = payment?.data?.metadata?.order_id?.value;

      if (!orderId) {
        return res.json({
          status: "error",
          message: "Order ID nahi mili",
        });
      }

      const order = await orderModel.findById(orderId);

      if (!order) {
        return res.json({
          status: "error",
          message: "Order nahi mila",
        });
      }

      order.paymentStatus = "paid";
      order.status = "pending";

      await order.save();

      if (order.user) {
        await cartModel.findOneAndUpdate(
          { user: order.user },
          { products: [] },
        );
      }

      return res.json({
        status: "success",
        message: "Payment successful",
        order: order,
      });
    } catch (error) {
      console.log("Verify Payment Error:", error);
      return res.json({
        status: "error",
        message: error.message,
      });
    }
  },

  getUserOrders: async function (req, res) {
    try {
      const orders = await orderModel
        .find({
          user: req.user._id,
        })
        .sort({
          createdAt: -1,
        });

      return res.json({
        status: "success",
        orders: orders,
      });
    } catch (error) {
      return res.json({
        status: "error",
        message: error.message,
      });
    }
  },
};
