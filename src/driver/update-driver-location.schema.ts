import { z } from 'zod';

export const UpdateDriverLocationSchema = z.strictObject({
  latitude: z.number().min(-90).max(90),
  longitude: z.number().min(-180).max(180),

  heading: z.number().min(0).max(360).optional(),
  speed: z.number().min(0).optional(),
});

export type UpdateDriverLocationInput = z.infer<
  typeof UpdateDriverLocationSchema
>;
