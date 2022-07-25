// const express = require("express");
// const cors = require("cors");
const { con } = require("../../../modal/modal");


module.exports = {
  productcgtget : async (req, res) => {
  try {
    const data = "SELECT *from productCategory";
    await con.query(data, (err, result) => {
      if (err) {
        return res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  }catch (err) {
    res.send({ Error: err.message });
  }},

productcgtpost : 
  async (req, res) => {
  try {
    const data = req.body;
    const q1 = "INSERT into productCategory SET ?";
    await con.query(q1, data, (err, result) => {
      if (err) {
        return res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  } catch (err) {
    res.send({ Error: err.message });
  }},



productcgtupdate : 
  async (req, res) => {
  try {
    const data = req.body;
    const id = req.params.cid;
    const q1 = "UPDATE  productCategory SET ? where cid = ?";

    await con.query(q1, [data, id], (err, result) => {
      if (err) {
        return res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  } catch (err) {
    res.send({ Error: err.message });
  }},


productcgtdelete:
  async (req, res) => {
  try {
    const id = req.params.cid;
    const q1 = "DELETE from productCategory where cid = ?";
    await con.query(q1, id, (err, result) => {
      if (err) {
        return res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  } catch (err) {
    res.send({ Error: err.message });
  }},

};