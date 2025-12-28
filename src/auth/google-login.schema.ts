import { z } from "zod";

export const GoogleLoginSchema = z.strictObject({
  googleIdToken: z
    .string()
    .min(1, "Token is required")
    .describe("Google ID token obtained from Google Sign-In client"),
});

export type GoogleLoginInput = z.infer<typeof GoogleLoginSchema>;
