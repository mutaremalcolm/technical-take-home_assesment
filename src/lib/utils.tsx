import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";


export function cn(...inputs: Array<string | undefined | null | false>): string {
  return twMerge(clsx(inputs));
}

// Define the type for an idea object
interface Idea {
  title: string;
  date: string;
}

// Define the type for the sortIdeas function parameters and return type
export const sortIdeas = (ideas: Idea[], sortType: string): Idea[] =>  {
  switch (sortType) {
    case 'A-Z':
      return [...ideas].sort((a, b) => a.title.localeCompare(b.title));
    case 'Z-A':
      return [...ideas].sort((a, b) => b.title.localeCompare(a.title));
    case 'Date':
      return [...ideas].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    default:
      return ideas;
  }
};
