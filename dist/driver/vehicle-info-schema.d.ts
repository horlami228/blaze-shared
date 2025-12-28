import { z } from "zod";
export declare const CreateVehicleSchema: z.ZodObject<{
    vehicleYear: z.ZodCoercedNumber<unknown>;
    vehicleColor: z.ZodEnum<{
        readonly BLACK: "BLACK";
        readonly WHITE: "WHITE";
        readonly SILVER: "SILVER";
        readonly GRAY: "GRAY";
        readonly RED: "RED";
        readonly BLUE: "BLUE";
        readonly GREEN: "GREEN";
        readonly YELLOW: "YELLOW";
        readonly ORANGE: "ORANGE";
        readonly BROWN: "BROWN";
        readonly GOLD: "GOLD";
        readonly BEIGE: "BEIGE";
        readonly PURPLE: "PURPLE";
        readonly OTHER: "OTHER";
    }>;
    modelId: z.ZodString;
    plateNumber: z.ZodString;
    exteriorPhoto: z.ZodAny;
    interiorPhoto: z.ZodAny;
}, z.core.$strict>;
export type CreateVehicleInput = z.infer<typeof CreateVehicleSchema>;
//# sourceMappingURL=vehicle-info-schema.d.ts.map