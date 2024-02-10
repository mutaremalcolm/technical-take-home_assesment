'use client';

import * as z from "zod";
import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { MdDeleteForever } from "react-icons/md";

import { Idea } from '@/lib/types';


const EditIdeaSchema = z.object({
  uuid: z.string(),
  title: z.string().min(5, {
    message: "⚠ Title must be at least 5 characters.",
  })
    .max(16, {
      message: "⚠ Title must not be longer than 16 characters.",
    }),
  description: z.string().optional(),   
  content: z.string().max(140 , "Must be less than").optional(),  
  createdTime: z.date(),
  updatedTime: z.date()
});


type EditIdeaSchemaType = z.infer<typeof EditIdeaSchema>;

interface IdeaCardProps {
  idea: Idea;
  onDelete: () => void;
  onSave: (updatedIdea: Idea) => void;

}

const IdeaCard: React.FC<IdeaCardProps> = ({ idea, onDelete, onSave }) => {
  const [charCount, setCharCount] = useState(0);
  const [isSaved, setIsSaved] = useState(false);
  
  const {
    register,
    handleSubmit,
    setValue, 
    formState: { errors }
  } = useForm<EditIdeaSchemaType>();

  useEffect(() => {
    setValue('title', idea.title || '');
    setValue('description', idea.description || '');
    setValue('content', idea.content || '');
  }, [idea, setValue]);

 const onSubmit: SubmitHandler<Idea> = async (data) => {
    console.log('onSubmit function is triggered');
    console.log('submit executed');
    console.log('Form Data:', data);
    try {
      const updatedIdea: Idea = EditIdeaSchema.parse({
        ...idea,
        title: data.title,
        description: data.description,
        content: data.content,
        updatedTime: new Date(),
      });

      onSave(updatedIdea);
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 3000);

      const updatedIdeas = JSON.parse(localStorage.getItem("ideas") || "[]").map(
        (storedIdea: Idea) =>
          storedIdea.uuid === updatedIdea.uuid ? updatedIdea : storedIdea
      );
      localStorage.setItem("ideas", JSON.stringify(updatedIdeas));

      // toast notif
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error('Validation error:', error.errors);
        // toast notif
      } else {
        console.error('Unexpected error:', error);
        // toast notif
      }
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}
    className={`relative bg-white rounded-lg shadow-lg p-4 mb-4 lg:w-1/4 ${isSaved ? 'bg-green-100' : ''}`} >
      <div>
        <input
          {...register('title')}
          type="text"
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
        {errors.description && <span className="text-red-500">{errors.description.message}</span>}

        <textarea
          {...register('content')}
          className="resize-none focus:outline-none focus:shadow-outline w-full"
          placeholder="Enter your ideas here..."
          defaultValue={idea.content}
          onChange={(e) => {
            const newContent = e.target.value;
            setCharCount(newContent.length);
          }}
        />
        {errors.content && <span className="text-red-500">{errors.content.message}</span>}

        <p className="text-gray-500 text-sm mt-2">
            Remaining Characters: {charCount}/150
          </p>
        </div>
        <div className="flex justify-between items-center mt-4 mb-8">
          <p className="text-gray-500 text-sm">
            Created: {idea.createdTime ? new Date(idea.createdTime).toLocaleString() : 'N/A'} | Updated:{' '}
            {idea.updatedTime ? new Date(idea.createdTime).toLocaleString() : 'N/A'}
          </p>
          </div>
          <div>
            <div>
              <button
                onClick={onDelete}
                className=" absolute bottom-0 left-0 p-2 cursor-pointer text-red-500 mr-2 text-4xl"
              >
                <MdDeleteForever />
              </button> 
              <div>
              <button 
                type="submit"
                className="absolute bottom-0 right-0 p-2 bg-blue-500 text-white px-3 py-1 mb-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline"
                
              >
                Save {isSaved && <div className="absolute top-0 right-0 p-2 text-green-500">✓ Saved</div>}
              </button>
              </div>
            </div>
          </div>
      </form>    
    </>
  );
};

export default IdeaCard;



// {
//   resolver: zodResolver(EditIdeaSchema),
//   mode: "onChange",
//   reValidateMode: "onChange",
//   shouldFocusError: false,
//   defaultValues: {
//     title: idea.title || '',
//     description: idea.description || '',
//     content: idea.content || '',
//   },
// }