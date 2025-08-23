const mongoose = require("mongoose");

// Schema creates a database key and value structure
const productSchema = mongoose.Schema({
    productTitle: {
        type: String,
        required: true
    },

    productDescription: {
        type: String,
        required: true
    },

    productPrice: {
        type: Number,
        required: true
    },

    discount: {
        type: String
    },
    productSize: {
        type: String,
        enum: ['S', 'M', 'L', 'XL', 'XXL']
    },
    productReview: {
        type: String
    }

});

const Product = mongoose.model("Products", productSchema);
module.exports = Product;