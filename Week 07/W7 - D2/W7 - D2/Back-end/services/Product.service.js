const productModel = require("../models/product.model");

async function addProduct(data) {
  return await personsModel.create(data);
}
async function deleteProduct(id) {
  const products = await productModel.findByIdAndDeleted(id);
  if (!products) {
    return "Product Not Found";
  }
  return "Product removed Successfully";
}
async function updateProduct(id, updated) {
  const products = await productModel.findByIdAndUpdate(id, updated);
  if (!products) {
    return "Product Not Found";
  }
  return "Product updated Successfully";
}
