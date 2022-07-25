const joi = require("joi");

const schema = joi.object({
  pid:joi.string().min(1).max(10).required(),
  cmobile: joi.string().length(10).required(),
 quantity:joi.string().required(),
 addedon:joi.date().raw().required(),
});

const whisValidate = async (req, res, next) => {
  const value = await schema.validate(req.body);
  if (value.error) {
    res.send({ error: value.error.details[0] });
  } else {
    next();
  }
};

module.exports = { whisValidate };
