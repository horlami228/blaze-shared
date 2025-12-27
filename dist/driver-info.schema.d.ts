import { z } from "zod";
export declare const driverInfoSchema: z.ZodObject<{
    licenseNumber: z.ZodString;
    licensePhoto: z.ZodAny;
    profilePhoto: z.ZodAny;
}, z.core.$strip>;
export type DriverInfoInput = z.infer<typeof driverInfoSchema>;
//# sourceMappingURL=driver-info.schema.d.ts.map