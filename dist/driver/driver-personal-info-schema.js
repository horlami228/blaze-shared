"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriverPersonalInfoSchema = void 0;
const zod_1 = require("zod");
const enum_1 = require("../enum");
exports.DriverPersonalInfoSchema = zod_1.z.strictObject({
    phone: zod_1.z
        .string()
        .min(1, "Phone number is required")
        .describe("Phone number of the driver"),
    firstName: zod_1.z
        .string()
        .min(1, "First name is required")
        .describe("First name of the driver"),
    lastName: zod_1.z
        .string()
        .min(1, "Last name is required")
        .describe("Last name of the driver"),
    dateOfBirth: zod_1.z.coerce.date().describe("Date of birth of the driver"),
    gender: zod_1.z.enum(enum_1.Gender).describe("Gender of the driver"),
});
