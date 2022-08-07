import {RequestHandler} from "express";
import Example from "../model/Example";
import createHttpError from "http-errors";

export const getExample: RequestHandler = (req, res, next) => {
    res.json({message: "hello"})
}
export const getExampleData: RequestHandler = async (req, res, next) => {

    try {
        const {name, id}: IExampleData = req.body;

        const example = await Example.findOne({name});

        if(example) return next(createHttpError(406, 'example already exists'));

        const newExample = new Example({name, id});
        await newExample.save();
        res.json({message: "Record was successfully created"});
    } catch (e) {
        return next(createHttpError.intervalServerError)
    }
    
}