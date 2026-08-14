const userModel = require("../api/models/userModel");
const jwt = require("jsonwebtoken");

module.exports = {
  userauth: async function (req, res, next) {
    try {
      const token = req.headers.authorization;

      if (!token) {
        return res.status(401).json({
          status: "error",
          message: "token is missed",
        });
      }

      const tokenedUser = jwt.verify(
        token,
        process.env.SECRET_KEY
      );

      const user = await userModel.findById(tokenedUser.id);

      if (!user) {
        return res.status(401).json({
          status: "error",
          message: "user is not registered",
        });
      }

      req.user = user;

      next();
    } catch (err) {
      return res.status(401).json({
        status: "error",
        message: "Token invalid hai",
      });
    }
  },
};