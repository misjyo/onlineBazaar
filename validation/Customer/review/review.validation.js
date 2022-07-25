const joi = require("joi");

const schema = joi.object({
  cid:joi.string().min(1).max(10).required(),
  reviewpoint:joi.string().required(),
  message:joi.string().min(1).max(20).required(),
  date:joi.date().raw().required(),
 
});

const reviewValidate = async (req, res, next) => {
  const value = await schema.validate(req.body);
  if (value.error) {
    res.send({ error: value.error.details[0] });
  } else {
    next();
  }
};

module.exports = { reviewValidate };
