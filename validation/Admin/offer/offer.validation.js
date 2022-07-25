const joi = require("joi");

//  schema design
const schema = joi.object({
  offerid: joi.string().min(1).max(10).required(),
  coupancode: joi.string().min(1).max(10).required(),
  fromdate: joi.date().raw().required(),
  todate: joi.date().raw().required(),
  discountpercentage: joi.string().required(),
  flatdiscount: joi.string().required(),
  validin: joi.string().required(),
  bankoffer: joi.string().required(),
});

const offerValidate = async (req, res, next) => {
  const value = await schema.validate(req.body);
  if (value.error) {
    res.send({ error: value.error.details[0] });
  } else {
    next();
  }
};

module.exports = { offerValidate };
