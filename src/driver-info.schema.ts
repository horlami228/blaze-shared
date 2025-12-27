import { z } from "zod";

export const DriverInfoSchema = z.object({
  licenseNumber: z
    .string()
    .max(12, "License number is too long")
    .min(12, "License number is too short"),
  licensePhoto: z.any(),
  profilePhoto: z.any(),
});

export type DriverInfoInput = z.infer<typeof DriverInfoSchema>;
