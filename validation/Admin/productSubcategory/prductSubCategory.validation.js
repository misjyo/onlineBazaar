const joi = require("joi");

const schema = joi.object({
  cid: joi.string().min(1).max(10).required(),
  ccid: joi.string().min(1).max(10).required(),
  cname: joi.string().min(1).max(10).required(),
});

const productSubCategoryValidate = async (req, res, next) => {
  const value = await schema.validate(req.body);
  if (value.error) {
    res.send({ error: value.error.details[0] });
  } else {
    next();
  }
};

module.exports = { productSubCategoryValidate };
