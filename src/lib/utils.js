import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

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
