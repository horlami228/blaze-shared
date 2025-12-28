"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriverInfoSchema = void 0;
const zod_1 = require("zod");
exports.DriverInfoSchema = zod_1.z.strictObject({
    licenseNumber: zod_1.z
        .string()
        .max(12, "License number is too long")
        .min(12, "License number is too short")
        .describe("Driver license number"),
    licensePhoto: zod_1.z.any().describe("Driver license photo"),
    profilePhoto: zod_1.z.any().describe("Driver profile photo"),
});
