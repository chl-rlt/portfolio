import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Merge Tailwind classes, fusion all classes to avoid conflicts
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
