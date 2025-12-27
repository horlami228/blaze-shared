"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDriverSchema = void 0;
const zod_1 = require("zod");
exports.CreateDriverSchema = zod_1.z.object({
    fullName: zod_1.z.string().min(3, "Name is too short"),
    email: zod_1.z.email("Invalid email"),
    vehicleYear: zod_1.z.coerce.number().min(2000, "Vehicle too old"),
    driverWife: zod_1.z.boolean().default(false),
});
