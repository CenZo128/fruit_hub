const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemSchema = new Schema(
    {
        product_name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true,
            enum : ['Fruit', 'Vegetables', 'Diet']
        },    
        price: {
            type: Number,
            required: true,
            min: [100, 'The product price is too low.'],
            max: [1000000000, 'Please put reasonable price.'],
            trim: true
        },
        actualPrice: {
            type: Number,
            // default: 0,
            required: [true, 'The actual price is price after discount. Please input "0" in the column.'],
            // min: [100, 'The product price is too low.'],
            // max: [1000000000, 'Please put reasonable price.'],
            // trim: true
        },   
        discount: {
            type: Number,
            default: 0,
            max: 100,
            trim: true
        }, 
        stock: {
            type: Number,
            required: true,
            min: [5, 'Too few products!'],
            max: [100, 'Too many products!']
        },
        weight: {
            type: Number,
            required: true,
            min: [0.1, 'Weight is too low!']
        },   
        product_image: {
            type: String,
            required: true
        },
        nutrition : {
            type : String,
            required: true
        },
        farmer_supllier: {
            type : String,
            required: true
        },
        admin: { type: Schema.Types.ObjectId, ref: "Admin", default: null },
            
    },
    {
        timestamps: true
    }
)

exports.Item = mongoose.model("Item", itemSchema);
