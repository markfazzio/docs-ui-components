// Restrict value to be between the range [0, value]
export const clamp = (value: number) => Math.max(0, value);

// Check if number is between two values
export const isBetween = (value: number, floor: number, ceil: number) =>
  value >= floor && value <= ceil;
