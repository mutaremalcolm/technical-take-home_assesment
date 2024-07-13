import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const localData = {
  set(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
  },
  get(key) {
      const stored = localStorage.getItem(key);
      return stored == null ? undefined : JSON.parse(stored);
  },
  remove(key) {
      localStorage.removeItem(key);
  }
};
