import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// localStorage API utility
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

// sort utility
export const sortIdeas = (ideas, sortType) => {
  switch (sortType) {
    case 'A-Z':
      return [...ideas].sort((a, b) => a.title.localeCompare(b.title));
    case 'Z-A':
      return [...ideas].sort((a, b) => b.title.localeCompare(a.title));
    case 'Date':
      return [...ideas].sort((a, b) => new Date(b.date) - new Date(a.date));
    default:
      return ideas;
  }
};
