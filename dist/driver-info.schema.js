"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriverInfoSchema = void 0;
const zod_1 = require("zod");
exports.DriverInfoSchema = zod_1.z.object({
    licenseNumber: zod_1.z
        .string()
        .max(12, "License number is too long")
        .min(12, "License number is too short"),
    licensePhoto: zod_1.z.any(),
    profilePhoto: zod_1.z.any(),
});
