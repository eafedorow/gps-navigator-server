"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = exports.DB = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
/*TODO: make it in .env file*/
exports.DB = "mongodb+srv://admin:24Liremi$_@cluster0.4atksr3.mongodb.net/gps-navigator?retryWrites=true&w=majority";
exports.PORT = 9000;
