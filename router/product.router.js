let express = require("express");
let  ProductController  = require("../controller/product.controller");
let router = express.Router(); //router reference not the express reference, navigates based upon the path, this file is respnnible to pass file path to controller

//mapping sub path with http methods

router.get("/allProductDetails",ProductController.getProductDetails);
router.get("/retrieveProductById/:pid",ProductController.getProductById)
router.post("/storeProductDetails",ProductController.storeProductDetails);
router.delete("/deleteProductById/:pid",ProductController.deleteProductById);
router.put("/updateProductPrice",ProductController.updateProductPrice);


module.exports=router;