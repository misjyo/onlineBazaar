const express = require("express");
const cartroutes = express.Router();
const {
  cartValidate,
} = require("../../../validation/Customer/cart/cart.validation");


const {
  cartget,
  cartpost,
  cartupdate,
  cartdelete,
} = require("../../../controller/Customer/cart/cart.controller");

cartroutes.get("/whislist-get", cartget);
cartroutes.post("/whislist-post",cartValidate, cartpost);
cartroutes.patch("/whislist-update/:pid",cartValidate,cartupdate);
cartroutes.delete("/whislist-delete/:pid", cartdelete);

module.exports = cartroutes;
