"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleLoginSchema = void 0;
const zod_1 = require("zod");
exports.GoogleLoginSchema = zod_1.z.strictObject({
    googleIdToken: zod_1.z
        .string()
        .min(1, "Token is required")
        .describe("Google ID token obtained from Google Sign-In client"),
});
