import { z } from "zod";

export const LoginSchema = z.strictObject({
  email: z.email("Invalid email address").describe("User email"),
  password: z.string().min(1, "Password is required").describe("User password"),
});

export type LoginInput = z.infer<typeof LoginSchema>;
