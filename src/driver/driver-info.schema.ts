import { z } from "zod";

export const DriverInfoSchema = z.strictObject({
  licenseNumber: z
    .string()
    .max(12, "License number is too long")
    .min(12, "License number is too short")
    .describe("Driver license number"),
  licensePhoto: z.any().describe("Driver license photo"),
  profilePhoto: z.any().describe("Driver profile photo"),
});

export type DriverInfoInput = z.infer<typeof DriverInfoSchema>;
