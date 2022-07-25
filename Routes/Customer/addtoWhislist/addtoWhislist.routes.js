const express = require("express");
const whisroutes = express.Router();
const {
  whisValidate,
} = require("../../../validation/Customer/addtoWhislist/addtoWhislist.validation");


const {
  whislistget,
  whislistpost,
  whislistupdate,
  whislistdelete,
} = require("../../../controller/Customer/addtoWhislist/addtoWhislist.controller");

whisroutes.get("/whislist-get", whislistget);
whisroutes.post("/whislist-post",whisValidate, whislistpost);
whisroutes.patch("/whislist-update/:pid",whisValidate,whislistupdate);
whisroutes.delete("/whislist-delete/:pid", whislistdelete);

module.exports = whisroutes;
