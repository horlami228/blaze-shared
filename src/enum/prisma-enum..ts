export const VehicleColor = {
  BLACK: "BLACK",
  WHITE: "WHITE",
  SILVER: "SILVER",
  GRAY: "GRAY",
  RED: "RED",
  BLUE: "BLUE",
  GREEN: "GREEN",
  YELLOW: "YELLOW",
  ORANGE: "ORANGE",
  BROWN: "BROWN",
  GOLD: "GOLD",
  BEIGE: "BEIGE",
  PURPLE: "PURPLE",
  OTHER: "OTHER",
} as const;

export const UserRole = {
  DRIVER: "DRIVER",
  RIDER: "RIDER",
  ADMINISTRATOR: "ADMINISTRATOR",
} as const;

export const Gender = {
  MALE: "MALE",
  FEMALE: "FEMALE",
  OTHER: "OTHER",
} as const;

export const VehicleType = {
  SEDAN: "SEDAN",
  SUV: "SUV",
  HATCHBACK: "HATCHBACK",
  COUPE: "COUPE",
  CONVERTIBLE: "CONVERTIBLE",
  TRUCK: "TRUCK",
  VAN: "VAN",
  MOTORCYCLE: "MOTORCYCLE",
} as const;

export const RideStatus = {
  PENDING: "PENDING",
  ACCEPTED: "ACCEPTED",
  REJECTED: "REJECTED",
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  ONGOING: "ONGOING",
} as const;
