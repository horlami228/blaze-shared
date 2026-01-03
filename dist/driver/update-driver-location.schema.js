"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDriverLocationSchema = void 0;
const zod_1 = require("zod");
exports.UpdateDriverLocationSchema = zod_1.z.strictObject({
    latitude: zod_1.z.number().min(-90).max(90),
    longitude: zod_1.z.number().min(-180).max(180),
    heading: zod_1.z.number().min(0).max(360).optional(),
    speed: zod_1.z.number().min(0).optional(),
});
