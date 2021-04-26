//load all required modules
let app = require("express")();
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");



//database url details
let url = "mongodb://localhost:27017/meanstack";

//middleware -- to enable the json, to enable data from post method
app.use(bodyParser.urlencoded({extended:true})); //enable post method data (json or not json), or body part data
app.use(bodyParser.json()); // pass data in json format, enable json format (json data)
app.use(cors());           // enable cors policy 

//Database connection without warning
const mongooseDbOption = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(url, mongooseDbOption) //ready to connect

//connect the data
mongoose.connection

//link to router module
var Product = require("./router/product.router.js");

//URL
// http://localhost:9090/product/allProductDetails  get app product details
// http://localhost:9090/product/retrieveProductById/102  get product details by Id
// http://localhost:9090/product/storeProductDetails rest client or post man {"pid":103,"pname":"Computer","price":43000}
// http://localhost:9090/product/deleteProductById/101
// http://localhost:9090/product/updateProductPrice update price using pid {"pid":103,"price":48000}

//Middleware
app.use("/product",Product)
//app.use("/order",Order)
//app.use("/customer",Customer)


app.listen(9090, ()=>console.log("sevrer running on port number 9090"));