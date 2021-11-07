"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = void 0;
const express = require('express');
const db_1 = __importDefault(require("../config/db"));
const cors_1 = __importDefault(require("cors"));
const app = express();
function handleError(error, res) {
    console.error(error.message);
    res.status(500).json({ msg: "server Error" });
}
exports.handleError = handleError;
(0, db_1.default)();
app.use(express.json());
app.use((0, cors_1.default)());
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server stated on port ${PORT}`));
//# sourceMappingURL=server.js.map