const express = require("express");
const shiproutes = express.Router();
const {
  shipValidate,
} = require("../../validation/Shipping/shipping.validation");


const {
  shipget,
  shippost,
  shipupdate,
  shipdelete,
} = require("../../controller/Shipping/shipping.controller");

shiproutes.get("/ship-get", shipget);
shiproutes.post("/ship-post", shipValidate,shippost);
shiproutes.patch("/ship-update/:shipid",shipValidate,shipupdate);
shiproutes.delete("/ship-delete/:shipid", shipdelete);

module.exports = shiproutes;
