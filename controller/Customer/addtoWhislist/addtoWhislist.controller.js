
const { con } = require("../../../modal/modal");

module.exports = {whislistget : async (req, res) => {
  try {
    const data = "SELECT *from addToWhislist";
    await con.query(data, (err, result) => {
      if (err) {
        return res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  } catch (err) {
    res.send({ Error: err.message });
  }},


whislistpost : async (req, res) => {
  try {
    const data = req.body;
    const q1 = "INSERT into addToWhislist SET ?";
    await con.query(q1, data, (err, result) => {
      if (err) {
        return res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  } catch (err) {
    res.send({ Error: err.message });
  }},


whislistupdate: async (req, res) => {
  try {
    const data = req.body;
    const id =req.params.pid;
    const q1 = "UPDATE  addToWhislist SET ? where pid = ?";

    await con.query(q1, [data, id], (err, result) => {
      if (err) {
        return res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  } catch (err) {
    res.send({ Error: err.message });
  }},


whislistdelete : async (req, res) => {
  try {
    const pid = req.params.pid;
    const q1 = "DELETE from addToWhislist where pid = ?";
    await con.query(q1, pid, (err, result) => {
      if (err) {
        return res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  } catch (err) {
    res.send({ Error: err.message });
  }}


};
