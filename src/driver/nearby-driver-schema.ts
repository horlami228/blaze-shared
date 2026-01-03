import { z } from 'zod';

export const NearByDriverSchema = z.strictObject({
  driverId: z.string(),
  distance: z.string(),
  latitude: z.string(),
  heading: z.string().optional(),
  speed: z.string().optional(),
});

export type NearByDriverInput = z.infer<typeof NearByDriverSchema>;
