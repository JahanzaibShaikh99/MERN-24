const mongoose = require('mongoose');

const productSchema = ({
    name: {
        type: String,
        required: [true, "Please enter the name"],
        minLength: [5, "Length should not be under 5"],
        maxLength: [20, "Length should not be more than 20"]
    },
    price: {
        type: Number,
        required: [true, "Please enter the price"],
        min: [1, "Price under 1 not allowed"],
        max: [10000, "Price over 10000 not allowed"]
    },
    available : Boolean,
    category: {
        type: String,
        enum: ['Electronics', 'Clothes', 'Grocery'],
        default: 'Electronics'
    }
})

const productModel = mongoose.model('products', productSchema);
module.exports = productModel;