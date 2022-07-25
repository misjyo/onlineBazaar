const joi = require("joi");

const schema = joi.object({
  userid:joi.string().min(1).max(10).required(),
  username:joi.string().min(1).max(20).required(),
doj:joi.string().required(),
  password:joi.string().required(),
  dept:joi.string().required(),
  role:joi.string().required(),
 status:joi.string().required(),
});

const userValidate = async (req, res, next) => {
  const value = await schema.validate(req.body);
  if (value.error) {
    res.send({ error: value.error.details[0] });
  } else {
    next();
  }
};

module.exports = { userValidate };
