"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NearByDriverSchema = void 0;
const zod_1 = require("zod");
exports.NearByDriverSchema = zod_1.z.strictObject({
    driverId: zod_1.z.string(),
    distance: zod_1.z.string(),
    latitude: zod_1.z.string(),
    heading: zod_1.z.string().optional(),
    speed: zod_1.z.string().optional(),
});
