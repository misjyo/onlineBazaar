
const { con } = require("../../../modal/modal");


module.exports={ proInventoryget :async (req, res) => {
  try {
    const data = "SELECT *from productInventory";
    await con.query(data, (err, result) => {
      if (err) {
        return res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  } catch (err) {
    res.send({ Error: err.message });
  }},


proInventorypost: async (req, res) => {
  try {
    const data = req.body;
    const q1 = "INSERT into productInventory SET ?";
    await con.query(q1, data, (err, result) => {
      if (err) {
        return res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  } catch (err) {
    res.send({ Error: err.message });
  }},

proInventoryupdate: async (req, res) => {
  try {
    const data = req.body;
    const id=req.params.pid;
    const q1 = "UPDATE  productInventory SET ? where pid = ?";

    await con.query(q1, [data, id], (err, result) => {
      if (err) {
        return res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  } catch (err) {
    res.send({ Error: err.message });
  }},

proInventorydelete: async (req, res) => {
  try {
    const pid = req.params.pid;
    const q1 = "DELETE from productInventory where pid = ?";
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


