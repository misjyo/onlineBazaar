const joi = require("joi");

//  schema design
const schema = joi.object({
  regno: joi.string().min(1).max(10).required(),

  shopid: joi.string().min(2).max(10).required(),
  shopname: joi.string().min(2).max(20).required(),

  owner: joi.string().min(2).max(10).required(),
  address: joi.string().min(2).max(50).required(),
country:joi.string().min(2).max(50).required(),
  city: joi.string().min(2).max(20).required(),

  state: joi.string().min(2).max(20).required(),
  email: joi
    .array()
    .items(joi.string().email().max(20).required())
    .single()
    .required(),
  url: joi.string().min(2).max(20).required(),
  turnover: joi.string().min(2).max(20).required(),
  discription: joi.string().min(2).max(50).required(),
  uploaddocs: joi.string().min(2).max(15).required(),
  status: joi.string().required(),
   termscondition:joi.string().required(),
  pincode: joi.string().length(6).required(),

  contact: joi.string().length(10).required(),

  type: joi.string().required(),
  gst: joi.string().length(12).required(),
  password:joi.string().required(),
  company:joi.string().required(),
});

const shopRegistrationvalidate = async (req, res, next) => {
  const value = await schema.validate(req.body);
  if (value.error) {
    res.send({ error: value.error.details[0] });
  } else {
    next();
  }
};

module.exports = { shopRegistrationvalidate };
