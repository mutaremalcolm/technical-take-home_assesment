'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { Idea } from '@/lib/types';
import { v4 as uuidv4 } from 'uuid';
import { z } from 'zod';
import { useState } from 'react';


const IdeaSchema = z.object({
  uuid: z.string(),
  title: z.string().min(1), 
  description: z.string(),
  createdTime: z.date(),
  updatedTime: z.date(),
  content: z.string(),
});

interface IdeaCardProps {
  idea: Idea;
  onDelete: () => void; 
  onSave: (updatedIdea: Idea) => void;
  cardSaved: () => void;
}

const IdeaCard: React.FC<IdeaCardProps> = ({ idea, onDelete, onSave, cardSaved }) => {
  const { register, 
        handleSubmit, 
        setValue, 
        formState: { errors }
       } = useForm<Idea>({
        defaultValues: {
          title: idea.title || '',
          description: idea.description || '',
          content: idea.content || '',
        },
      });

const [remainingChars, setRemainingChars] = useState(255);
  const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newContent = event.target.value;
        setValue('content', newContent); 
        setRemainingChars(255 - newContent.length); 
      };

  const onSubmit: SubmitHandler<Idea> = async (data) => {
    try {
      const updatedIdea: Idea = IdeaSchema.parse({
        ...idea,
        uuid: uuidv4(),
        title: data.title,
        description: data.description,
        content: data.content,
        updatedTime: new Date(),
      });

      onSave(updatedIdea);
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error('Validation error:', error.errors);
      } else {
        console.error('Unexpected error:', error);
      }
    }
  };

  return (
      // <form >
      <div onSubmit={handleSubmit(onSubmit)} className="relative bg-white rounded-lg shadow-lg p-4 mb-4 lg:w-1/4">
        <button
          onClick={onDelete}
          className="absolute top-0 right-0 p-2 cursor-pointer text-red-500"
        >
          X
        </button>
        <div>
          <input
            type="text"
            {...register('title', {
              required: 'Title is required',
              minLength: { value: 1, message: 'Title must be at least 1 character long' },
            })}
            className="font-bold text-lg mb-2 focus:outline-none focus:shadow-outline border-b-2 border-blue-500 w-full"
            placeholder="Enter title..."
            autoFocus
          />
          {errors.title && <span className="text-red-500">{errors.title.message}</span>}
          <textarea
            {...register('description')}
            className="resize-none focus:outline-none focus:shadow-outline w-full"
            placeholder="Idea description..."
          />
          <textarea
            {...register('content')}
            onChange={handleContentChange}
            value={idea.content}
            className="resize-none focus:outline-none focus:shadow-outline w-full"
            placeholder="Enter your ideas here..."
          />
          <p className="text-gray-500 text-sm mt-2">
        Remaining Characters: {remainingChars}/{255}
      </p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <p className="text-gray-500 text-sm">
            Created: {idea.createdTime ? new Date(idea.createdTime).toLocaleString() : 'N/A'} | Updated:{' '}
            {idea.updatedTime ? new Date(idea.createdTime).toLocaleString() : 'N/A'}
          </p>
          <button
            type="submit"
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline"
            onClick={() => handleSubmit(onSubmit)()}
          >
            Save
          </button>
        </div>
      </div>
      // </form>
  );
};

export default IdeaCard;
