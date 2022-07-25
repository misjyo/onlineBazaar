
const { con } = require("../../modal/modal");


module.exports ={userget : async (req, res) => {
  try {
    const data = "SELECT *from user";
    await con.query(data, (err, result) => {
      if (err) {
        return res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  } catch (err) {
    res.send({ Error: err.message });
  }},


userpost :async (req, res) => {
  try {
    const data = req.body;
    const q1 = "INSERT into user SET ?";
    await con.query(q1, data, (err, result) => {
      if (err) {
        return res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  }catch (err) {
    res.send({ Error: err.message });
  }},


userupdate: async (req, res) => {
  try {
    const data = req.body;
    const id= req.params.userid;
    const q1 = "UPDATE  user SET ? where userid = ?";

    await con.query(q1, [data,id], (err, result) => {
      if (err) {
        return res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  }catch (err) {
    res.send({ Error: err.message });
  }},

userdelete: async (req, res) => {
  try {
    const id = req.params.userid;
    const q1 = "DELETE from user where userid = ?";
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
