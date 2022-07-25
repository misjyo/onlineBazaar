const joi = require("joi");

const schema = joi.object({
  pid:joi.string().min(1).max(10).required(),
  cartid:joi.string().min(1).max(10).required(),
  cmobile: joi.string().length(10).required(),
 quantity:joi.string().required(),
 price:joi.string().required(),
 addedon:joi.date().raw().required(),
 paymentstatus:joi.string().valid("pending","completed").required(),
});

const cartValidate = async (req, res, next) => {
  const value = await schema.validate(req.body);
  if (value.error) {
    res.send({ error: value.error.details[0] });
  } else {
    next();
  }
};

module.exports = { cartValidate };
