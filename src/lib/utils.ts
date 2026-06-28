import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * twMerge function: 
 * 1. parent class: flex flex-col gap-2
 * 2. children class: flex flex-col gap-6 -> passed to parent class as argument
 * 
 * twMerge() result -> flex flex-col gap-6
 * 
 * result: merging duplicate class, for the difference one use the latest/children
 * class
 * 
 */