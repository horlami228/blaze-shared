"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDriverUserSchema = exports.CreateRiderUserSchema = exports.CreateUserBaseSchema = void 0;
const zod_1 = require("zod");
// Base schema for shared fields
exports.CreateUserBaseSchema = zod_1.z.strictObject({
    email: zod_1.z.string().email("Invalid email address").describe("User email"),
    password: zod_1.z
        .string()
        .min(8, "Password must be at least 8 characters")
        .describe("User password"),
    firstName: zod_1.z
        .string()
        .min(1, "First name is required")
        .describe("First name of the user"),
    lastName: zod_1.z
        .string()
        .min(1, "Last name is required")
        .describe("Last name of the user"),
});
// Rider Schema (Adds phone)
exports.CreateRiderUserSchema = exports.CreateUserBaseSchema.extend({
    phone: zod_1.z.string().optional().describe("User phone number"),
});
// Driver Schema (Uses base as is, or you can extend it later)
exports.CreateDriverUserSchema = exports.CreateUserBaseSchema;
