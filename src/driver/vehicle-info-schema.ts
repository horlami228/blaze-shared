import { z } from "zod";
import { VehicleColor } from "../enum";

export const CreateVehicleSchema = z.strictObject({
  vehicleYear: z.coerce
    .number()
    .int()
    .min(2000, "Year must be 2000 or later")
    .max(new Date().getFullYear() + 1, "Year cannot be in the far future")
    .describe("Manufacturing year of the vehicle"),

  vehicleColor: z.enum(VehicleColor).describe("Color of the vehicle"),

  modelId: z
    .string()
    .min(1, "Model ID is required")
    .describe("ID of the vehicle model"),

  plateNumber: z
    .string()
    .length(9, "Plate number must be exactly 9 characters")
    .describe("9-character plate number"),

  exteriorPhoto: z.any().describe("Exterior photo of the vehicle"),
  interiorPhoto: z.any().describe("Interior photo of the vehicle"),
});

export type CreateVehicleInput = z.infer<typeof CreateVehicleSchema>;
