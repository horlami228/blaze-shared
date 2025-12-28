import { z } from "zod";
export declare const GoogleLoginSchema: z.ZodObject<{
    googleIdToken: z.ZodString;
}, z.core.$strict>;
export type GoogleLoginInput = z.infer<typeof GoogleLoginSchema>;
//# sourceMappingURL=google-login.schema.d.ts.map