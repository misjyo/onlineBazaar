const joi = require("joi");

const schema = joi.object({
  shopid:joi.string().min(1).max(10).required(),
  invoice:joi.string().min(1).max(20).required(),
cmobile:joi.string().length(10).required(),
  date:joi.date().raw().required(),
  shipdate:joi.date().raw().required(),
  deliverydate:joi.date().raw().required(),
 status:joi.valid("pending","completed").required(),
});

const shipValidate = async (req, res, next) => {
  const value = await schema.validate(req.body);
  if (value.error) {
    res.send({ error: value.error.details[0] });
  } else {
    next();
  }
};

module.exports = { shipValidate };
