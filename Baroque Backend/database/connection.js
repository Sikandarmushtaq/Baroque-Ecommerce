const mongoose = require("mongoose");
async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected");
  } catch (err) {
    console.log("Not Connected" + err);
  }
}
module.exports = connectToDatabase;
