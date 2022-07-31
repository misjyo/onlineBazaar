const express = require("express");
const psubcgtroutes = express.Router();
const {
  productSubCategoryValidate,
} = require("../../../validation/Admin/productSubcategory/prductSubCategory.validation");


const {
  productsubcgtget,
  productsubcgtpost,
  productsubcgtupdate,
  productsubcgtdelete,
} = require("../../../controller/Admin/productSubCategory/productSubCategory.controller");

psubcgtroutes.get("/product-sub-cgt-get" ,productsubcgtget);
psubcgtroutes.post("/product-sub-cgt-post",productSubCategoryValidate,productsubcgtpost);
psubcgtroutes.patch("/product-sub-cgt-update/:cid",productSubCategoryValidate,productsubcgtupdate);
psubcgtroutes.delete("/product-sub-cgt-delete/:cid", productsubcgtdelete);

module.exports = psubcgtroutes;
