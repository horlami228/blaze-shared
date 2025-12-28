import { z } from "zod";

// Base schema for shared fields
export const CreateUserBaseSchema = z.strictObject({
  email: z.string().email("Invalid email address").describe("User email"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .describe("User password"),
  firstName: z
    .string()
    .min(1, "First name is required")
    .describe("First name of the user"),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .describe("Last name of the user"),
});

// Rider Schema (Adds phone)
export const CreateRiderUserSchema = CreateUserBaseSchema.extend({
  phone: z.string().optional().describe("User phone number"),
});

// Driver Schema (Uses base as is, or you can extend it later)
export const CreateDriverUserSchema = CreateUserBaseSchema;

export type CreateRiderUserInput = z.infer<typeof CreateRiderUserSchema>;
export type CreateDriverUserInput = z.infer<typeof CreateDriverUserSchema>;
