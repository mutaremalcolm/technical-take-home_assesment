'use client';

import * as z from "zod";
import toast from "react-hot-toast";

import { Idea } from '@/lib/types';
import { v4 as uuidv4 } from 'uuid';
import { MdDeleteForever } from "react-icons/md";
import { useEffect, useRef, useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from 'react-hook-form';


const generateUUID = () => {
  return uuidv4();
};

const EditIdeaSchema = z.object({
  uuid: z.string().default(()=> generateUUID()),
  title: z.string().min(5, {
    message: "⚠ Title must be at least 5 characters.",
  })
    .max(16, {
      message: "⚠ Title must not be longer than 16 characters.",
    })

  .default("Default Title"),
  description: z.string().optional(),   
  content: z.string()
    .max(150 , { message: "⚠ Content must be less than 150 characters."})
    .default("Default Content"),  
    createdTime: z.date().refine((value) => !isNaN(value.getTime()), {
      message: 'Invalid Date',
    }).default(() => new Date()),
    updatedTime: z.date().refine((value) => !isNaN(value.getTime()), {
      message: 'Invalid Date',
    }).default(() => new Date()),
  });

type EditIdeaSchemaType = z.infer<typeof EditIdeaSchema>;


interface IdeaCardProps {
  idea: Idea;
  onDelete: () => void;
  onSave: (updatedIdea: Idea) => void;
}

const IdeaCard: React.FC<IdeaCardProps> = ({ idea, onDelete, onSave }) => {
  const [charCount, setCharCount] = useState(0);
  const isSavedRef = useRef(false);
  
  const {
    register,
    handleSubmit, 
    formState: { errors },
    reset,
  } = useForm<EditIdeaSchemaType>({resolver: zodResolver(EditIdeaSchema), 
    mode: "onChange"
  });

  useEffect(() => {
    reset({
      title: idea.title || '',
      description: idea.description || '',
      content: idea.content || '',
    });
  }, [idea, reset]);

 const onSubmit: SubmitHandler<Idea> = async (data) => {
    try {
      const updatedIdea: Idea = EditIdeaSchema.parse({
        ...idea,
        uuid: data.uuid,
        title: data.title,
        description: data.description,
        content: data.content,
        createdTime: new Date(data.createdTime), // Convert to Date object
        updatedTime: new Date(data.updatedTime), // Convert to Date object
      });

      onSave(updatedIdea);

      const updatedIdeas = JSON.parse(localStorage.getItem("ideas") || "[]").map(
        (storedIdea: Idea) =>
          storedIdea.uuid === updatedIdea.uuid ? updatedIdea : storedIdea
      );
      localStorage.setItem("ideas", JSON.stringify(updatedIdeas));

      isSavedRef.current = true;

    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error('Validation error:', error.errors);
        toast.error('🌟 Validation error', {
          position: 'bottom-center',
        });
      } else {
        console.error('Unexpected error:', error);
        toast.error('🌟 Unexpected error', {
          position: 'bottom-center',
        });
      }
    }
  };
  
  const formatDateTime = (dateTime: Date) => {
    // Check if dateTime is a valid date
    if (!(dateTime instanceof Date) || isNaN(dateTime.getTime())) {
      console.log(dateTime)
      return 'Invalid Date';
    }
  
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
  
    return new Intl.DateTimeFormat('en-US', options).format(dateTime);
  };
  
  
  
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}
    className={` form relative bg-gray-800 bg-opacity-90 rounded-lg shadow-md border border-clearScoreGrey p-4 mb-4 lg:w-1/4 
      ${isSavedRef.current ? 'bg-green-100' : ''
      } hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1 hover:scale-105`} 
      style={{ margin: '10px' }}
      >
       <div className="flex justify-between items-center mt-0 mb-2">
          <p className=" text-gray-500 text-sm">
          Created: {idea.createdTime ? formatDateTime(idea.createdTime) : 'N/A'}
          </p>
          </div>
      <div>
        <input
          {...register('title')}
          type="text"
          className="bg-transparent font-bold text-lg mb-2 focus:outline-none focus:shadow-outline border-b-2 border-white w-full"
          placeholder="Enter Title & Description..."
          autoFocus
        />
        {errors.title &&<span className="text-red-500">{errors.title.message}</span>}

        {/* <textarea
          {...register('description')}
          className="bg-transparent resize-none focus:outline-none focus:shadow-outline w-full"
          placeholder="Idea description..."
        />
        {errors.description && <span className="text-red-500">{errors.description.message}</span>} */}

        <textarea
          {...register('content')}
          className="bg-transparent resize-none focus:outline-none focus:shadow-outline w-full"
          placeholder="Enter your ideas here..."
          onChange={(e) => {
            const newContent = e.target.value;
            if (newContent.length <= 150) {
            setCharCount(newContent.length);
            }
          }}
        />
        {errors.content && <span className="text-red-500">{errors.content.message}</span>}

        <p className="bg-transparent text-gray-500 text-sm ml-10 mt-10">
            Character Count: {charCount}/150
          </p>
        </div>
          <div>
            <div>
              <button
                onClick={onDelete}
                className=" hover: transition-shadow absolute bottom-0 left-0 p-2 cursor-pointer text-bg-800 mr-2 text-4xl"
              >
                <MdDeleteForever />
              </button> 
              <div>
              <button 
                type="submit"
                className={`absolute bottom-0 right-0 mr-4 p-2 hover:bg-gray-400 ${
                  isSavedRef.current ? 'bg-green-500' : 'bg-white'
                } text-black px-3 py-1 mb-2 rounded hover:${
                  isSavedRef.current ? 'bg-green-600' : 'bg-black'
                } focus:outline-none focus:shadow-outline`}
              >
                {isSavedRef.current ? 'Saved' : 'Save'}
              </button>
              </div>
            </div>
          </div>
      </form>    
    </>
  );
};

export default IdeaCard;





