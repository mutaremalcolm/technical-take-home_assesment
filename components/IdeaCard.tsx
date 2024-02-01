

import { useState } from 'react';

interface Idea {
  title: string;
  description: string;
  createdTime: string;
  updatedTime: string;
  content: string;
}

interface IdeaCardProps {
  idea: Idea;
  onDelete: () => void; // Function to handle deletion
}

const IdeaCard: React.FC<IdeaCardProps> = ({ idea, onDelete }) => {
  const [isEditing, setEditing] = useState(true);
  const [editedTitle, setEditedTitle] = useState(idea?.title || '');
  const [editedDescription, setEditedDescription] = useState(idea?.description || '');
  const [editedContent, setEditedContent] = useState(idea?.content)

  const handleSaveClick = () => {
    // Implement your save logic here
    setEditing(false);
    // You can dispatch an action to update the idea with the editedTitle and editedDescription
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
          Created: {idea.createdTime} | Updated: {idea.updatedTime}
        </p>
        <button
          onClick={handleSaveClick}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default IdeaCard;
