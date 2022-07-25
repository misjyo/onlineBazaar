const joi = require("joi");

//  schema design
const schema = joi.object({
  pspecification: joi.string().min(1).max(10).required(),
  pid: joi.string().min(1).max(10).required(),
  height:joi.string().required(),
  width: joi.string().required(),
  size: joi.string().required(),
  price: joi.string().required(),
  color: joi.string().required(),
  expdate: joi.date().raw().required(),
  mfd: joi.date().raw().required(),
  weight: joi.string().required(),
  dimension:joi.string().required(),
});

const productSpecificationValidate = async (req, res, next) => {
  const value = await schema.validate(req.body);
  if (value.error) {
    res.send({ error: value.error.details[0] });
  } else {
    next();
  }
};

module.exports = { productSpecificationValidate };
