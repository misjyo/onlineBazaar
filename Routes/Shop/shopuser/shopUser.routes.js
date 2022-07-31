const express = require("express");
const shopuserroutes = express.Router();
const {
  shopuserValidate,
} = require("../../../validation/Shops/shopuser/shopuser.vallidation");


const {
  shopuserget,
  shopuserpost,
  shopuserupdate,
  shopuserdelete,
} = require("../../../controller/Shops/shopuser/shopUser.controller");

shopuserroutes.get("/shopuser-get", shopuserget);
shopuserroutes.post("/shopuser-post", shopuserValidate,shopuserpost);
shopuserroutes.patch("/shopuser-update/:userid",shopuserValidate,shopuserupdate);
shopuserroutes.delete("/shopuser-delete/:userid", shopuserdelete);

module.exports = shopuserroutes;
