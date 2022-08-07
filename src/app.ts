import express, {ErrorRequestHandler} from 'express'
import createHttpError from "http-errors";
import exampleRoutes from "./routes/exampleRoutes";
import {DB, PORT} from "./config";
import {errorHandler} from "./middleware/errorHandler";

const mongoose = require("mongoose");
const app = express();
app.use(express.json());
app.use('/', exampleRoutes);

app.use(() => {
    throw createHttpError(404, "Route not found")
})

app.use(errorHandler);

mongoose
    .connect(DB)
    .then(() => {
        console.log('Connected to db');
        app.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`);
        })
    })
    .catch(() => {
        throw createHttpError(501, "Unable to connect database")
    })