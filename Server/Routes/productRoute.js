const express = require("express");
const productController = require("../Controllers/productController");

const router = express.Router();

router.route("/product").post(productController.createProduct);

module.exports = router;