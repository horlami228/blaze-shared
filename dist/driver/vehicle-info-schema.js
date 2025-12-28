"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVehicleSchema = void 0;
const zod_1 = require("zod");
const enum_1 = require("../enum");
exports.CreateVehicleSchema = zod_1.z.strictObject({
    vehicleYear: zod_1.z.coerce
        .number()
        .int()
        .min(2000, "Year must be 2000 or later")
        .max(new Date().getFullYear() + 1, "Year cannot be in the far future")
        .describe("Manufacturing year of the vehicle"),
    vehicleColor: zod_1.z.enum(enum_1.VehicleColor).describe("Color of the vehicle"),
    modelId: zod_1.z
        .string()
        .min(1, "Model ID is required")
        .describe("ID of the vehicle model"),
    plateNumber: zod_1.z
        .string()
        .length(9, "Plate number must be exactly 9 characters")
        .describe("9-character plate number"),
    exteriorPhoto: zod_1.z.any().describe("Exterior photo of the vehicle"),
    interiorPhoto: zod_1.z.any().describe("Interior photo of the vehicle"),
});
