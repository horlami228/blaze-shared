import { z } from 'zod';
export declare const UpdateDriverLocationSchema: z.ZodObject<{
    latitude: z.ZodNumber;
    longitude: z.ZodNumber;
    heading: z.ZodOptional<z.ZodNumber>;
    speed: z.ZodOptional<z.ZodNumber>;
}, z.core.$strict>;
export type UpdateDriverLocationInput = z.infer<typeof UpdateDriverLocationSchema>;
//# sourceMappingURL=update-driver-location.schema.d.ts.map