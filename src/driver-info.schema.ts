import { z } from "zod";

export const driverInfoSchema = z.object({
  licenseNumber: z
    .string()
    .max(12, "License number is too long")
    .min(12, "License number is too short"),
  licensePhoto: z.any(),
  profilePhoto: z.any(),
});

export type DriverInfoInput = z.infer<typeof driverInfoSchema>;
