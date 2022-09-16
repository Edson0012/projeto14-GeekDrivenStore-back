import joi from "joi";

export const productSchema = joi.object({
    name: joi.string().min(1).required(),
    image: joi.string().required(),
    description: joi.string().min(1).required(),
    value: joi.number().min(3).required(),
    category: joi.string().min(4).required()
})