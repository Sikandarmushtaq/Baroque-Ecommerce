const CheckoutShipping = () => {
  return (
    <div>

      <h2 className="text-3xl font-light tracking-[3px] mb-8">
        Shipping Method
      </h2>

      <div className="flex items-center justify-between p-5 border rounded-lg">

        <div>
          <p className="font-medium">
            Standard Shipping
          </p>

          <p className="mt-1 text-sm text-gray-500">
            Delivery in 3-5 business days
          </p>
        </div>

        <p className="font-semibold">
          FREE
        </p>

      </div>

    </div>
  );
};

export default CheckoutShipping;