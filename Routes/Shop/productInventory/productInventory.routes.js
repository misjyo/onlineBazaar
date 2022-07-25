const express = require("express");
const proinroutes = express.Router();
const {
  productInventoryValidate,
} = require("../../../validation/Shops/productInventory/productInventory.validation");


const {
  proInventoryget,
  proInventorypost,
  proInventoryupdate,
  proInventorydelete,
} = require("../../../controller/Shops/productInventory/productInventory.controller");

proinroutes.get("/proinventory-get", proInventoryget);
proinroutes.post("/proinventory-post", productInventoryValidate,proInventorypost);
proinroutes.patch("/proinventory-update/:pid",productInventoryValidate,proInventoryupdate);
proinroutes.delete("/proinventory-delete/:pid", proInventorydelete);

module.exports = proinroutes;
