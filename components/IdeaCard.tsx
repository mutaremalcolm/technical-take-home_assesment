'use client';

import { Idea } from '@/lib/types';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { z } from 'zod';


// 🎯 to-do-list FUTURE 
// react hook forms
// zod validation 

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
  onDelete: () => void; // Function to handle deletion
  onSave: (updatedIdea: Idea) => void;
  cardSaved: () => void;
}

const IdeaCard: React.FC<IdeaCardProps> = ({ idea, onDelete, onSave, cardSaved }) => {
  const [isEditing, setEditing] = useState(true);
  const [editedTitle, setEditedTitle] = useState(idea?.title || '');
  const [editedDescription, setEditedDescription] = useState(idea?.description || '');
  const [editedContent, setEditedContent] = useState(idea?.content)

  const handleSaveClick = () => {
    try {
    const updatedIdea: Idea = IdeaSchema.parse ({
      ...idea,
      uuid: uuidv4(),
      title: editedTitle,
      description: editedDescription,
      content: editedContent,
      updatedTime: new Date(), // Update the updatedTime
  });

    onSave(updatedIdea);
    setEditing(false);
    cardSaved()
  } catch (error){
    if (error instanceof z.ZodError) {
      console.error('Validation error:', error.errors);
    }else {
    console.error('Unexpected error:', error);
    }
  }
};

  return (
    <div className="relative bg-white rounded-lg shadow-lg p-4 mb-4 lg:w-1/4">
      <button
        onClick={onDelete}
        className="absolute top-0 right-0 p-2 cursor-pointer text-red-500"
      >
        X
      </button>
      <div>
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          className="font-bold text-lg mb-2 focus:outline-none focus:shadow-outline border-b-2 border-blue-500 w-full"
          placeholder="Enter title..."
          autoFocus
        />
        <textarea
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
          className="resize-none focus:outline-none focus:shadow-outline w-full"
          placeholder="Idea description..."
        />
        <textarea
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
          className="resize-none focus:outline-none focus:shadow-outline w-full"
          placeholder="Enter your ideas here..."
        />
      </div>
      <div className="flex justify-between items-center mt-4">
        <p className="text-gray-500 text-sm">
          Created: {idea.createdTime ? new Date(idea.createdTime).toLocaleString() : 'N/A'} 
          | Updated: {idea.updatedTime ? new Date(idea.createdTime).toLocaleString() : 'N/A'}
        </p>
        {isEditing ? (
        <button
          onClick={handleSaveClick}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline"
        >
          Save
        </button>
        ) : (
          <button
          onClick={() => {
            handleSaveClick();
            cardSaved();
          }}
            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 focus:outline-none focus:shadow-outline"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};



export default IdeaCard;


