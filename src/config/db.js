const mongoose = require("mongoose")

//const mondbUrl="mongodb+srv://riyamazumder356:7lfVn9OKyBs7xrVV@cluster0.gt2q9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const mondbUrl="mongodb://127.0.0.1:27017/Ecommerce_Api";
const connectDb=()=>{
    return mongoose.connect(mondbUrl);
}

module.exports={connectDb}