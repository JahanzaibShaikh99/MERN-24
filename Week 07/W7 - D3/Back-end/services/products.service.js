const productModel = require('../models/products.model');

async function addProduct(data) {
    return await productModel.create(data);
}

async function deleteProduct(productId) {
    const product = await productModel.findByIdAndDelete(productId);
    if (!product) {
        return 'Product not found';
    }
    return 'Product removed successfully';
}

async function getProduct() {
    return await productModel.find();
}

async function updateProduct(productId, updatedData) {
    const product = await productModel.findByIdAndUpdate(productId, updatedData);
    if (!product) {
        return 'Product not found';
    }
    return 'Data updated'
}

async function addManyProduct(data) {
    return await productModel.insertMany(data);
}


module.exports = {
    addProduct,
    deleteProduct,
    getProduct,
    updateProduct,
    addManyProduct
}