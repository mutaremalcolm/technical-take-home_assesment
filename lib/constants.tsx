import { Idea } from '@/lib/types';
import { v4 as uuidv4 } from 'uuid';

export const sampleIdeas: Idea[] = [
  {
    uuid: uuidv4(),
    title: 'Sample Idea 1',
    description: 'This is a sample idea description for the first card.',
    createdTime: new Date(),
    updatedTime: new Date(),
    content: 'This is the content of the first sample idea.',
  },
  {
    uuid: uuidv4(),
    title: 'Sample Idea 2',
    description: 'This is a sample idea description for the second card.',
    createdTime: new Date(),
    updatedTime: new Date(),
    content: 'This is the content of the second sample idea.',
  },
  {
    uuid: uuidv4(),
    title: 'Sample Idea 2',
    description: 'This is a sample idea description for the second card.',
    createdTime: new Date(),
    updatedTime: new Date(),
    content: 'This is the content of the second sample idea.',
  }, 
];
