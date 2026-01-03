"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestRideSchema = void 0;
const zod_1 = require("zod");
exports.RequestRideSchema = zod_1.z.strictObject({
    pickupLatitude: zod_1.z.number(),
    pickupLongitude: zod_1.z.number(),
    pickupAddress: zod_1.z.string(),
    dropoffLatitude: zod_1.z.number(),
    dropoffLongitude: zod_1.z.number(),
    dropoffAddress: zod_1.z.string(),
});
