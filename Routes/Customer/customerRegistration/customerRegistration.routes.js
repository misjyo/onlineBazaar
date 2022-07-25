const express = require("express");
const cusregroutes = express.Router();
const {
  cusRegValidate,
} = require("../../../validation/Customer/customerRegistration/customerRegistration.validation");


const {
  cusregget,
  cusregpost,
  cusregtupdate,
  cusregtdelete,
} = require("../../../controller/Customer/customerRegistration/customerRegistration.controller");

cusregroutes.get("/cus-reg-get", cusregget);
cusregroutes.post("/cus-reg-post",cusRegValidate, cusregpost);
cusregroutes.patch("/cus-reg-update/:cmobile",cusRegValidate,cusregtupdate);
cusregroutes.delete("/cus-reg-delete/:cmobile", cusregtdelete);

module.exports = cusregroutes;
