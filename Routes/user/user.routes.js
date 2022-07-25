const express = require("express");
const userroutes = express.Router();
const {
  userValidate,
} = require("../../validation/user/user.validation");


const {
  userget,
  userpost,
  userupdate,
  userdelete,
} = require("../../controller/user/user.controller");

userroutes.get("/user-get", userget);
userroutes.post("/user-post", userValidate,userpost);
userroutes.patch("/user-update/:userid",userValidate,userupdate);
userroutes.delete("/user-delete/:userid", userdelete);

module.exports = userroutes;
