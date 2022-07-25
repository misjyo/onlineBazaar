const express = require("express");
const payroutes = express.Router();
const {
  payValidate,
} = require("../../../validation/Customer/makePayment/makePayment.validation");


const {
  payget,
  paypost,
  payupdate,
  paydelete,
} = require("../../../controller/Customer/makePayment/makePayment.controller");

payroutes.get("/pay-get", payget);
payroutes.post("/pay-post",payValidate, paypost);
payroutes.patch("/pay-update/:transid",payValidate,payupdate);
payroutes.delete("/pay-delete/:transid", paydelete);

module.exports = payroutes;
