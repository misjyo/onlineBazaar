const express = require("express");
const routes = express.Router();
const {
  shopRegistrationvalidate,
} = require("../../../validation/Admin/shopRegistration/Shopregistration.validation");


const {
  shopRegistrationget,
  shopRegistrationpost,
  shopRegistrationupdate,
  shopRegistrationdelete,
} = require("../../../controller/Admin/shopRegistration/shopRegistration.controller");

routes.get("/shop-registration-get" ,shopRegistrationget);
routes.post("/shop-registration-post",shopRegistrationvalidate,shopRegistrationpost);
routes.patch("/shop-registration-update/:shopid",shopRegistrationvalidate,shopRegistrationupdate);
routes.delete("/shop-registration-delete/:shopid", shopRegistrationdelete);

module.exports = routes;
