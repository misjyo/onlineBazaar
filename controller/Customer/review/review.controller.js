
const { con } = require("../../../modal/modal");

module.exports={
reviewget :async (req, res) => {
  try {
    const data = "SELECT *from review";
    await con.query(data, (err, result) => {
      if (err) {
        return res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  } catch (err) {
    res.send({ Error: err.message });
  }},


reviewpost :async (req, res) => {
  try {
    const data = req.body;
    const q1 = "INSERT into review SET ?";
    await con.query(q1, data, (err, result) => {
      if (err) {
        return res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  } catch (err) {
    res.send({ Error: err.message });
  }},


reviewupdate :async (req, res) => {
  try {
    const data = req.body;
    const id=req.params.cid;
    const q1 = "UPDATE  review SET ? where cid = ?";

    await con.query(q1, [data,id ], (err, result) => {
      if (err) {
        return res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  }catch (err) {
    res.send({ Error: err.message });
  }},


reviewdelete :async (req, res) => {
  try {
    const cid = req.params.cid;
    const q1 = "DELETE from review where cid = ?";
    await con.query(q1, cid, (err, result) => {
      if (err) {
        return res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  } catch (err) {
    res.send({ Error: err.message });
  }}
};

