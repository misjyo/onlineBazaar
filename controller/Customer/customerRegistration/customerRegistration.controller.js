
const { con } = require("../../../modal/modal");

module.exports= { cusregget :async (req, res) => {
  try {
    const data = "SELECT *from customerRegistration";
    await con.query(data, (err, result) => {
      if (err) {
        return res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  }catch (err) {
    res.send({ Error: err.message });
  }},


cusregpost : async (req, res) => {
  try {
    const data = req.body;
    const q1 = "INSERT into customerRegistration SET ?";
    await con.query(q1, data, (err, result) => {
      if (err) {
        return res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  } catch (err) {
    res.send({ Error: err.message });
  }},


cusregtupdate :async (req, res) => {
  try {
    const data = req.body;
    const id =req.params.cmobile;
    const q1 = "UPDATE  customerRegistration SET ? where cmobile = ?";

    await con.query(q1, [data, id], (err, result) => {
      if (err) {
        return res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  } catch (err) {
    res.send({ Error: err.message });
  }},


cusregtdelete :async (req, res) => {
  try {
    const cmobile = req.params.cmobile;
    const q1 = "DELETE from customerRegistration where cmobile = ?";
    await con.query(q1, cmobile, (err, result) => {
      if (err) {
        return res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  } catch (err) {
    res.send({ Error: err.message });
  }}


}