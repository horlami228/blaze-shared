import { z } from 'zod';

export const RequestRideSchema = z.strictObject({
  pickupLatitude: z.number(),
  pickupLongitude: z.number(),
  pickupAddress: z.string(),
  dropoffLatitude: z.number(),
  dropoffLongitude: z.number(),
  dropoffAddress: z.string(),
});

export type RequestRideInfo = z.infer<typeof RequestRideSchema>;
