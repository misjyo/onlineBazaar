const express = require("express");
const bankroutes = express.Router();
const {
  bankValidate,
} = require("../../../validation/Shops/bank/bank.vallidation");


const {
  bankget,
  bankpost,
  bankupdate,
  bankdelete,
} = require("../../../controller/Shops/bank/bank.controller");

bankroutes.get("/bank-get", bankget);
bankroutes.post("/bank-post", bankValidate,bankpost);
bankroutes.patch("/bank-update/:accno",bankValidate,bankupdate);
bankroutes.delete("/bank-delete/:accno", bankdelete);

module.exports = bankroutes;
