"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importera och konfigurera
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = Number(process.env.PORT || 4444);
// Middleware
app.use("/", express_1.default.static("dist/"));
app.use("/", express_1.default.json());
// Router middleware
// Eventuella routes
// Starta servern
app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
});
