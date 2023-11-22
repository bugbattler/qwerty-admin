const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    identifier: { type: String },
    orderItems: { type: Array },
    firstName: { type: String },
    lastName: { type: String },
    city: { type: String },
    state: { type: String },
    postalCode: { type: String },
    mNo: { type: Number },
    email: { type: String },
    totalPrice: { type: Number },
    isComplete: { type: Boolean },
   
  },
  { timestamps: true }
);

module.exports = mongoose.model("order", orderSchema);
