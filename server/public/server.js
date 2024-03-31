"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const Form_1 = require("./models/Form");
const app = (0, express_1.default)();
const port = 4000;
const mongoURI = "mongodb://localhost:27017/ID_Form";
app.use((0, cors_1.default)());
app.use(express_1.default.json());
mongoose_1.default
    .connect(mongoURI)
    .then(() => {
    app.listen(port, () => {
        console.log(`server started at http://localhost:${port}`);
    });
})
    .catch((error) => console.log(error));
app.get("/", (req, res) => {
    res.json({ message: "root" });
});
app.post("/create", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const form = new Form_1.Form(req.body);
        yield form.save();
        res.json({ message: "data saved successfully", data: req.body });
    }
    catch (error) {
        res.json(error);
    }
}));
app.use((req, res) => {
    res.json({ message: "page not found" });
});
