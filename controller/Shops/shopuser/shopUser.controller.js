
const { con } = require("../../../modal/modal");


module.exports={ shopuserget :async (req, res) => {
  try {
    const data = "SELECT *from shopuser";
    await con.query(data, (err, result) => {
      if (err) {
        return res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  } catch (err) {
    res.send({ Error: err.message });
  }},


shopuserpost: async (req, res) => {
  try {
    const data = req.body;
    const q1 = "INSERT into shopuser SET ?";
    await con.query(q1, data, (err, result) => {
      if (err) {
        return res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  } catch (err) {
    res.send({ Error: err.message });
  }},

shopuserupdate: async (req, res) => {
  try {
    const data = req.body;
    const id=req.params.userid;
    const q1 = "UPDATE  shopuser SET ? where userid = ?";

    await con.query(q1, [data, id], (err, result) => {
      if (err) {
        return res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  } catch (err) {
    res.send({ Error: err.message });
  }},

shopuserdelete: async (req, res) => {
  try {
    const id = req.params.userid;
    const q1 = "DELETE from shopuser where userid = ?";
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


