const joi = require("joi");

//  schema design
const schema = joi.object({
  pid: joi.string().min(1).max(10).required(),
  cid: joi.string().min(1).max(10).required(),
  ccid: joi.string().min(1).max(10).required(),
  pname: joi.string().min(1).max(10).required(),
  pcompany: joi.string().min(1).max(10).required(),
  shopid: joi.string().min(1).max(10).required(),
  qty: joi.string().required(),
  discription: joi.string().min(1).max(50).required(),
});

const productInventoryValidate = async (req, res, next) => {
  const value = await schema.validate(req.body);
  if (value.error) {
    res.send({ error: value.error.details[0] });
  } else {
    next();
  }
};

module.exports = { productInventoryValidate };
