const joi = require("joi");

const schema = joi.object({
  userid:joi.string().min(1).max(10).required(),
  username:joi.string().min(1).max(20).required(),
  contact:joi.string().length(10).required(),
  email: joi
  .array()
  .items(joi.string().email().max(20).required())
  .single()
  .required(),
  password:joi.string().required(),
  doj:joi.string().required(),
  role:joi.string().required(),

});

const shopuserValidate = async (req, res, next) => {
  const value = await schema.validate(req.body);
  if (value.error) {
    res.send({ error: value.error.details[0] });
  } else {
    next();
  }
};

module.exports = { shopuserValidate };
