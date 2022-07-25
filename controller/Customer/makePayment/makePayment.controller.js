
const { con } = require("../../../modal/modal");



module.exports = { payget :async (req, res) => {
  try {
    const data = "SELECT *from makePayment";
    await con.query(data, (err, result) => {
      if (err) {
        return res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  } catch (err) {
    res.send({ Error: err.message });
  }},

paypost : async (req, res) => {
  try {
    const data = req.body;
    const q1 = "INSERT into makePayment SET ?";
    await con.query(q1, data, (err, result) => {
      if (err) {
        return res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  } catch (err) {
    res.send({ Error: err.message });
  }},


payupdate:  async (req, res) => {
  try {
    const data = req.body;
    const id = req.params.transid;
    const q1 = "UPDATE  makePayment SET ? where transid = ?";

    await con.query(q1, [data, id], (err, result) => {
      if (err) {
        return res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  } catch (err) {
    res.send({ Error: err.message });
  }},


paydelete: async (req, res) => {
  try {
    const transid = req.params.transid;
    const q1 = "DELETE from makePayment where transid = ?";
    await con.query(q1, transid, (err, result) => {
      if (err) {
        return res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  } catch (err) {
    res.send({ Error: err.message });
  }}
};


