import { z } from "zod";
export declare const CreateDriverSchema: z.ZodObject<{
    fullName: z.ZodString;
    email: z.ZodEmail;
    vehicleYear: z.ZodCoercedNumber<unknown>;
}, z.core.$strict>;
export type CreateDriverInput = z.infer<typeof CreateDriverSchema>;
//# sourceMappingURL=driver.schema.d.ts.map