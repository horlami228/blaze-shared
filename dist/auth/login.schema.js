"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginSchema = void 0;
const zod_1 = require("zod");
exports.LoginSchema = zod_1.z.strictObject({
    email: zod_1.z.email("Invalid email address").describe("User email"),
    password: zod_1.z.string().min(1, "Password is required").describe("User password"),
});
