const express = require("express");
const pcgtroutes = express.Router();
const {
  productCategoryValidate,
} = require("../../../validation/Admin/productCategory/productCategory.validation");


const {
  productcgtget,
  productcgtpost,
  productcgtupdate,
  productcgtdelete,
} = require("../../../controller/Admin/productCategory/productCategory.controller");

pcgtroutes.get("/product-cgt-get" ,productcgtget);
pcgtroutes.post("/product-cgt-post",productCategoryValidate,productcgtpost);
pcgtroutes.patch("/product-cgt-update/:cid",productCategoryValidate,productcgtupdate);
pcgtroutes.delete("/product-cgt-delete/:cid", productcgtdelete);

module.exports = pcgtroutes;
