import { z } from 'zod';
export declare const RequestRideSchema: z.ZodObject<{
    pickupLatitude: z.ZodNumber;
    pickupLongitude: z.ZodNumber;
    pickupAddress: z.ZodString;
    dropoffLatitude: z.ZodNumber;
    dropoffLongitude: z.ZodNumber;
    dropoffAddress: z.ZodString;
}, z.core.$strict>;
export type RequestRideInfo = z.infer<typeof RequestRideSchema>;
//# sourceMappingURL=request-ride-schema.d.ts.map