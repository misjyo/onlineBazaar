const express = require("express");
const reviewroutes = express.Router();
const {
  reviewValidate,
} = require("../../../validation/Customer/review/review.validation");


const {
  reviewget,
  reviewpost,
  reviewupdate,
  reviewdelete,
} = require("../../../controller/Customer/review/review.controller");

reviewroutes.get("/review-get", reviewget);
reviewroutes.post("/review-post",reviewValidate, reviewpost);
reviewroutes.patch("/review-update/:cid",reviewValidate,reviewupdate);
reviewroutes.delete("/review-delete/:cid", reviewdelete);

module.exports = reviewroutes;
