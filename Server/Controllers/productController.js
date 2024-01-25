const ProductModel = require("../Models/productModel");

exports.createProduct = async (req, res) => {
  try {
    const product = await ProductModel.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        product,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: error.message,
    });
  }
};
