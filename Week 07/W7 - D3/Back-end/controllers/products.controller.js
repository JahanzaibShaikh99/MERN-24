

const productService = require('../services/products.service');

async function addProduct(req, res) {
    const productData = req.body;
    try {
        const newProduct = await productService.addProduct(productData);
        res.status(201).json({ message : "Successfully inserted productData"});
    }catch(er){
        res.status(500).json({message: "Error :" , error: er.message});
    }
    
}

async function getProduct(req, res) {
    try{
        const products = await productService.getProduct();
        res.status(201).json(products);
    }catch(er) {
        res.status(500).json({message: "Products not found ", error: er.message})
    }
    
}

async function deleteProduct(req, res) {
    try {
        const productId = req.params.id;
        const deleteMessage = await productService.deleteProduct(productId);
        res.status(200).json({message: deleteMessage});
    }catch(er) {
        res.status(500).json({message: "Error:", error: er.message});
    }   
}
async function updateProduct(req, res) {
    try{
        const updateId = req.params.id;
        const updateData = req.body;
        const updateMessage = await productService.updateProduct(updateId, updateData);
        res.status(200).json({message: updateMessage});
    } catch(er){
        res.status(500).json({message: "Error", error: er.message});
    }
}

module.exports = {
    addProduct,
    getProduct,
    deleteProduct,
    updateProduct
}
