import { z } from 'zod';
export declare const NearByDriverSchema: z.ZodObject<{
    driverId: z.ZodString;
    distance: z.ZodString;
    latitude: z.ZodString;
    heading: z.ZodOptional<z.ZodString>;
    speed: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
export type NearByDriverInput = z.infer<typeof NearByDriverSchema>;
//# sourceMappingURL=nearby-driver-schema.d.ts.map