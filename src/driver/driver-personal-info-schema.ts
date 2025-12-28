import { z } from "zod";
import { Gender } from "../enum";

export const DriverPersonalInfoSchema = z.strictObject({
  phone: z
    .string()
    .min(1, "Phone number is required")
    .describe("Phone number of the driver"),

  firstName: z
    .string()
    .min(1, "First name is required")
    .describe("First name of the driver"),

  lastName: z
    .string()
    .min(1, "Last name is required")
    .describe("Last name of the driver"),

  dateOfBirth: z
    .string()
    .pipe(z.coerce.date())
    .describe("Date of birth of the driver"),

  gender: z.enum(Gender).describe("Gender of the driver"),
});

export type DriverPersonalInfoInput = z.infer<typeof DriverPersonalInfoSchema>;
