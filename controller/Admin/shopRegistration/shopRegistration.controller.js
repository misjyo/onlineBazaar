const { con } = require("../../../modal/modal");

module.exports = {
  shopRegistrationget: async (req, res) => {
    try {
      const data = "SELECT *from shopregistration";
      await con.query(data, (err, result) => {
        if (err) {
          return res.json({ error: err.sqlMessage });
        }
        res.json({ status: 200, response: result });
      });
    } catch (err) {
      res.send({ Error: err.message });
    }},

  shopRegistrationpost: async (req, res) => {
    try {
      const data = req.body;
      const q1 = "INSERT into shopregistration SET ?";
      await con.query(q1, data, (err, result) => {
        if (err) {
          return res.send({ error: err.sqlMessage });
        }
        res.json({ status: 200, response: result });
      });
    } catch (err) {
      res.send({ Error: err.message });
    }},
  
    shopRegistrationupdate: async (req, res) => {
      try {
        const data = req.body;
        const id = req.params.shopid;
        const q1 = "UPDATE  shopregistration SET ? where shopid = ?";

        await con.query(
          q1, [data , id],
         
          (err, result) => {
            if (err) {
              return res.send({ error: err.sqlMessage });
            }
            res.json({ status: 200, response: result });
          }
        );
      } catch (err) {
        res.send({ Error: err.message });
      }},
  
    shopRegistrationdelete: async (req, res) => {
      try {
        const shopid = req.params.shopid;
        const q1 = "DELETE from shopregistration where shopid = ?";
        await con.query(q1, shopid,(err, result) => {
          if (err) {
            return res.send({ error: err.sqlMessage });
          }
          res.json({ status: 200, response: result });
        });
      } catch (err) {
        res.send({ Error: err.message });
      }}
    };

