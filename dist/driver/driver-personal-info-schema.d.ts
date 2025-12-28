import { z } from "zod";
export declare const DriverPersonalInfoSchema: z.ZodObject<{
    phone: z.ZodString;
    firstName: z.ZodString;
    lastName: z.ZodString;
    dateOfBirth: z.ZodPipe<z.ZodString, z.ZodCoercedDate<string>>;
    gender: z.ZodEnum<{
        readonly MALE: "MALE";
        readonly FEMALE: "FEMALE";
        readonly OTHER: "OTHER";
    }>;
}, z.core.$strict>;
export type DriverPersonalInfoInput = z.infer<typeof DriverPersonalInfoSchema>;
//# sourceMappingURL=driver-personal-info-schema.d.ts.map