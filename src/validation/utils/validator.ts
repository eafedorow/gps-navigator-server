import createHttpError from "http-errors";
import {NextFunction} from "express";
import Joi from 'joi'

const validator = async (
    schemaName: Joi.ObjectSchema,
    body: object,
    next: NextFunction
) => {
    const value = await schemaName.validate(body);

    try {
        value.error
        ? next(createHttpError(422, value.error.details[0].message))
        : next();
    } catch (e) {
        console.log(e)
    }
}

export default validator;