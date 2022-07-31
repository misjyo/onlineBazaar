
const { con } = require("../../../modal/modal");


module.exports={ bankget :async (req, res) => {
  try {
    const data = "SELECT *from bank";
    await con.query(data, (err, result) => {
      if (err) {
        return res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  } catch (err) {
    res.send({ Error: err.message });
  }},


bankpost: async (req, res) => {
  try {
    const data = req.body;
    const q1 = "INSERT into bank SET ?";
    await con.query(q1, data, (err, result) => {
      if (err) {
        return res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  } catch (err) {
    res.send({ Error: err.message });
  }},

bankupdate: async (req, res) => {
  try {
    const data = req.body;
    const id=req.params.accno;
    const q1 = "UPDATE  bank SET ? where accno = ?";

    await con.query(q1, [data, id], (err, result) => {
      if (err) {
        return res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  } catch (err) {
    res.send({ Error: err.message });
  }},

bankdelete: async (req, res) => {
  try {
    const id = req.params.accno;
    const q1 = "DELETE from bank where accno = ?";
    await con.query(q1, id, (err, result) => {
      if (err) {
        return res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  } catch (err) {
    res.send({ Error: err.message });
  }}
};


