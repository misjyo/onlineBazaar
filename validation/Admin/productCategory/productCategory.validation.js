const joi = require("joi");

const schema = joi.object({
  cid: joi.string().min(1).max(10).required(),
  cname: joi.string().min(1).max(20).required(),
});

const productCategoryValidate = async (req, res, next) => {
  const value = await schema.validate(req.body);
  if (value.error) {
    res.send({ error: value.error.details[0] });
  } else {
    next();
  }
};

module.exports = { productCategoryValidate };
