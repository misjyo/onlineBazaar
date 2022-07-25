const joi = require("joi");

const schema = joi.object({
  invoice:joi.string().min(1).max(20).required(),
  cartid:joi.string().min(1).max(10).required(),
  transid:joi.string().required(),
  date:joi.date().raw().required(),
 amount:joi.string().required(),
 tax:joi.string().required(),
 paymentmode:joi.string().required(),
 paymentstatus:joi.string().valid("failed","pass").required(),
});

const payValidate = async (req, res, next) => {
  const value = await schema.validate(req.body);
  if (value.error) {
    res.send({ error: value.error.details[0] });
  } else {
    next();
  }
};

module.exports = { payValidate };
