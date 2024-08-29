import Joi from 'joi';

export const userSchema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  password: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
});

export const validateUser = (user) => {
  return userSchema.validate(user);
};