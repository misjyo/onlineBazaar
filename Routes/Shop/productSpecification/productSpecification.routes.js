const express = require("express");
const prospecifyroutes = express.Router();
const {
  productSpecificationValidate,
} = require("../../../validation/Shops/productSpecification/productSpecification.validation");


const {
  proSpecifyget,
  proSpecifypost,
  proSpecifyupdate,
  proSpecifydelete,
} = require("../../../controller/Shops/productSpecification/productSpecification.controller");

prospecifyroutes.get("/prospecify-get", proSpecifyget);
prospecifyroutes.post("/prospecify-post",productSpecificationValidate, proSpecifypost);
prospecifyroutes.patch("/prospecify-update/:pspecification",productSpecificationValidate,proSpecifyupdate);
prospecifyroutes.delete("/prospecify-delete/:pspecification", proSpecifydelete);

module.exports = prospecifyroutes;
