"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = void 0;
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("../config/db"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
function handleError(error, res) {
    console.error(error.message);
    res.status(500).json({ msg: "server Error" });
}
exports.handleError = handleError;
(0, db_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api/orders', require('../routes/order'));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
//# sourceMappingURL=server.js.map