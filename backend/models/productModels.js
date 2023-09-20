const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter Product Name"],
        trim:true
    },
   description:{
        type:String,
        required:[true,"Please Enter Product Descripton"]
    },
    price:{
        type:Number,
        required:[true,"Please Enter Product Price"],
        maxLength:[8,"Price cannot exceed 8 chars"]
    },
    rating:{
        type:Number,
        default:0
    },
    images:[{
        public_id:{
            type:String,
            required:true
        }, 
        url:{
            type:String,
            required:true
        }
    }
],
    category:{
    type:String,
    required:[true,"Please Enter Category"]
},
    stock:{
    type:String,
    required:[true,"Please Enter Category"],
    maxLength:[4,'stck cannot exceed 4 char'],
    default:1
},
    numOfReviews:{
    type:Number,
    default:0
},
    reviews:[
    {
    name:{
    type:String,
    required:true,
    },
    rating:{
        type:Number,
        required: true,
    },
    Comment:{
        type:String,
        required:true
    }
}
],
createdAt :{
    type:Date,
    default:Date.now
}
})
module.exports = mongoose.model("Product", productSchema);