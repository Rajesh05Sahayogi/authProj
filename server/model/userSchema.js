const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    googleId:String,
    displayName:String,
    email:String,
    image:String,
    isDelete:{
        type: Boolean,
        default: false
    },
},{timestamps:true},
);


const userdb = new mongoose.model("users",userSchema);

module.exports = userdb;