const joi = require("joi");

const schema = joi.object({
  bankname:joi.string().min(1).max(20).required(),
  accno:joi.string().length(16).required(),
  ifsc_code:joi.string().length(15).required(),
  branch:joi.string().required(),
  acc_holder_name:joi.string().required(),

});

const bankValidate = async (req, res, next) => {
  const value = await schema.validate(req.body);
  if (value.error) {
    res.send({ error: value.error.details[0] });
  } else {
    next();
  }
};

module.exports = { bankValidate };
