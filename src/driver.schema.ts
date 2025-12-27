import { z } from "zod";

export const CreateDriverSchema = z.object({
  fullName: z.string().min(3, "Name is too short"),
  email: z.email("Invalid email"),
  vehicleYear: z.coerce.number().min(2000, "Vehicle too old"),
});

export type CreateDriverInput = z.infer<typeof CreateDriverSchema>;
