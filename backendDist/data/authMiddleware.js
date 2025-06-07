"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authenticate = (req, res, next) => {
    const token = req.headers.authorization;
    if (token && process.env.SECRET) {
        try {
            const verifiedUser = jsonwebtoken_1.default.verify(token, process.env.SECRET);
            console.log("Verified User:", verifiedUser);
            req.user = verifiedUser;
        }
        catch (error) {
            console.log("Invalid token:", error);
        }
    }
    next();
};
exports.authenticate = authenticate;
