"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const FormSchema = new mongoose_1.default.Schema({
    idNumber: {
        type: Number,
        required: true,
    },
    fName: {
        type: String,
        required: true,
    },
    mName: {
        type: String,
    },
    lName: {
        type: String,
        required: true,
    },
}, { timestamps: true });
exports.Form = mongoose_1.default.model("ID_Form", FormSchema);
