import { z } from "zod";
export declare const CreateUserBaseSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    firstName: z.ZodString;
    lastName: z.ZodString;
}, z.core.$strict>;
export declare const CreateRiderUserSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    firstName: z.ZodString;
    lastName: z.ZodString;
    phone: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
export declare const CreateDriverUserSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    firstName: z.ZodString;
    lastName: z.ZodString;
}, z.core.$strict>;
export type CreateRiderUserInput = z.infer<typeof CreateRiderUserSchema>;
export type CreateDriverUserInput = z.infer<typeof CreateDriverUserSchema>;
//# sourceMappingURL=create-user.schema.d.ts.map