const express = require("express");
const router = express.Router();
const productController = require("../app/controllers/persons.controller");
router.post("/persons", productController.addProduct);
router.get("/persons", productController.getProduct);
router.delete("/persons", productController.removeProduct);
router.patch("/persons", productController.updateProduct);
module.exports = router;
