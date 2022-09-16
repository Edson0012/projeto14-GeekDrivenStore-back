import joi from "joi";

export const signUpSchema = joi.object({
    name: joi.string().min(1).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
    cep: joi.string().length(8).pattern(/^[0-9]+$/).required(),
    rdn: joi.string().min(1).max(4).required(),
    phone: joi.string().length(10).pattern(/^[0-9]+$/).required()
});

export const signInSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(6).required()
});