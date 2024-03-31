"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const FormSchema = new mongoose_1.default.Schema({
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
    idNumber: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    course: {
        type: String,
        required: true,
    },
    bloodType: {
        type: String,
        required: true,
    },
    sex: {
        type: String,
        required: true,
    },
    birthDate: {
        type: Date,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    gfName: {
        type: String,
        required: true,
    },
    gmName: {
        type: String,
    },
    glName: {
        type: String,
        required: true,
    },
    gNumber: {
        type: Number,
        required: true,
    },
}, { timestamps: true });
exports.Form = mongoose_1.default.model("ID_Form", FormSchema);
