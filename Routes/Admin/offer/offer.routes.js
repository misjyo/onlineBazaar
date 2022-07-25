const express = require("express");
const offroutes = express.Router();
const {
  offerValidate,
} = require("../../../validation/Admin/offer/offer.validation");


const {
  offerget,
  offerpost,
  offerupdate,
  offerdelete,
} = require("../../../controller/Admin/offer/offer.controller");

offroutes.get("/offer-get", offerget);
offroutes.post("/offfer-post",offerValidate, offerpost);
offroutes.patch("/offer-update/:offerid",offerValidate,offerupdate);
offroutes.delete("/offer-delete/:offerid", offerdelete);

module.exports = offroutes;
