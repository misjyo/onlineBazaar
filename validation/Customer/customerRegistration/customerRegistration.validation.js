const joi = require("joi");

const schema = joi.object({
  cmobile: joi.string().length(10).required(),
  email: joi
  .array()
  .items(joi.string().email().max(20).required())
  .single()
  .required(),
gender:joi.string().valid("male","female").required(),
address:joi.string().required(),
state:joi.string().required(),
city:joi.string().required(),
pincode:joi.string().length(6).required(),
password:joi.string().required(),
});

const cusRegValidate = async (req, res, next) => {
  const value = await schema.validate(req.body);
  if (value.error) {
    res.send({ error: value.error.details[0] });
  } else {
    next();
  }
};

module.exports = { cusRegValidate };
