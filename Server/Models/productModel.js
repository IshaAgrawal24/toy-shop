const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
    unique: true,
  },
  image: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  oldPrice: {
    type: Number,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  ratings: {
    type: Number,
    require: true,
  },
  quantity: {
    type: Number,
    require: true,
    default: 1,
  },
  wishlist: {
    type: Number,
    require: true,
    default: 0,
  },
  add: {
    type: Number,
    require: true,
    default: 0,
  },
  category: {
    type: String,
    require: true,
    trim: true,
  },
});

const ProductModel = mongoose.model("products", productSchema);
module.exports = ProductModel;
