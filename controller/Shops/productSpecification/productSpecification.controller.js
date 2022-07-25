
const { con } = require("../../../modal/modal");

module.exports={ proSpecifyget : async (req, res) => {
  try {
    const data = "SELECT *from productSpecification";
    await con.query(data, (err, result) => {
      if (err) {
        return res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  }catch (err) {
    res.send({ Error: err.message });
  }},


proSpecifypost: async (req, res) => {
  try {
    const data = req.body;
    const q1 = "INSERT into productSpecification SET ?";
    await con.query(q1, data, (err, result) => {
      if (err) {
        return res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  } catch (err) {
    res.send({ Error: err.message });
  }},


proSpecifyupdate :async (req, res) => {
  try {
    const data = req.body;
    const id =req.params.pspecification;
    const q1 = "UPDATE  productSpecification SET ? where pspecification = ?";

    await con.query(q1, [data, id], (err, result) => {
      if (err) {
        return res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  } catch (err) {
    res.send({ Error: err.message });
  }},

proSpecifydelete :async (req, res) => {
  try {
    const pspecification = req.params.pspecification;
    const q1 = "DELETE from productSpecification where pspecification = ?";
    await con.query(q1, pspecification, (err, result) => {
      if (err) {
        return res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  } catch (err) {
    res.send({ Error: err.message });
  }}
};

