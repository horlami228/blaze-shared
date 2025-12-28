import { z } from "zod";
export declare const DriverInfoSchema: z.ZodObject<{
    licenseNumber: z.ZodString;
    licensePhoto: z.ZodAny;
    profilePhoto: z.ZodAny;
}, z.core.$strict>;
export type DriverInfoInput = z.infer<typeof DriverInfoSchema>;
//# sourceMappingURL=driver-info.schema.d.ts.map