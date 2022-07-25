
const { con } = require("../../modal/modal");


module.exports ={shipget : async (req, res) => {
  try {
    const data = "SELECT *from shipping";
    await con.query(data, (err, result) => {
      if (err) {
        return res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  } catch (err) {
    res.send({ Error: err.message });
  }},


shippost :async (req, res) => {
  try {
    const data = req.body;
    const q1 = "INSERT into shipping SET ?";
    await con.query(q1, data, (err, result) => {
      if (err) {
        return res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  }catch (err) {
    res.send({ Error: err.message });
  }},


shipupdate: async (req, res) => {
  try {
    const data = req.body;
    const id= req.params.shipid;
    const q1 = "UPDATE  shipping SET ? where shipid = ?";

    await con.query(q1, [data,id], (err, result) => {
      if (err) {
        return res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  }catch (err) {
    res.send({ Error: err.message });
  }},

shipdelete: async (req, res) => {
  try {
    const shipid = req.params.shipid;
    const q1 = "DELETE from shipping where shipid = ?";
    await con.query(q1, shipid, (err, result) => {
      if (err) {
        return res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  } catch (err) {
    res.send({ Error: err.message });
  }}

};
