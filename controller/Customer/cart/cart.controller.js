
const { con } = require("../../../modal/modal");

module.exports= { cartget : async (req, res) => {
  try {
    const data = "SELECT *from cart";
    await con.query(data, (err, result) => {
      if (err) {
        return res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  }catch (err) {
    res.send({ Error: err.message });
  }},


cartpost: async (req, res) => {
  try {
    const data = req.body;
    const q1 = "INSERT into cart SET ?";
    await con.query(q1, data, (err, result) => {
      if (err) {
        return res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  } catch (err) {
    res.send({ Error: err.message });
  }},

cartupdate : async (req, res) => {
  try {
    const data = req.body;
    const id =req.params.cartid;
    const q1 = "UPDATE  cart SET ? where cartid = ?";

    await con.query(q1, [data, id], (err, result) => {
      if (err) {
        return res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  } catch (err) {
    res.send({ Error: err.message });
  }},


cartdelete : async (req, res) => {
  try {
    const cartid = req.params.cartid;
    const q1 = "DELETE from cart where cartid = ?";
    await con.query(q1, cartid, (err, result) => {
      if (err) {
        return res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  } catch (err) {
    res.send({ Error: err.message });
  }}


};
