const { con } = require("../../../modal/modal");


module.exports =
{ 
  offerget : async(req, res) => {
  try {
    const data = "SELECT *from offer";
    await con.query(data, (err, result) => {
      if (err) {
        return res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  } catch (err) {
    res.send({ Error: err.message });
  }},


offerpost : async(req, res) => {
  try {
    const data = req.body;
    const q1 = "INSERT into offer SET ?";
    await con.query(q1, data, (err, result) => {
      if (err) {
        return res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  } catch (err) {
    res.send({ Error: err.message });
  }},


offerupdate : async (req, res) => {
  try {
    const data = req.body;
    const id= req.params.offerid;
    const q1 = "UPDATE  offer SET ? where offerid = ?";

    await con.query(q1, [data,id], (err, result) => {
      if (err) {
        return res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  } catch (err) {
    res.send({ Error: err.message });
  }},


offerdelete : async (req, res) => {
  try {
    const offerid = req.params.offerid;
    const q1 = "DELETE from offer where offerid = ?";
    await con.query(q1, offerid, (err, result) => {
      if (err) {
        return res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  } catch (err) {
    res.send({ Error: err.message });
  }}
};
