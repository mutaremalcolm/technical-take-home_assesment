// components/IdeaCard.tsx

import { useState } from 'react';

interface Idea {
  title: string;
  description: string;
  createdTime: string;
  updatedTime: string;
  // Add other properties as needed
}

interface IdeaCardProps {
  idea: Idea;
}

const IdeaCard: React.FC<IdeaCardProps> = ({ idea }) => {
  const [isEditing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(idea?.title || '');
  const [editedDescription, setEditedDescription] = useState(idea?.description || '');

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    // Implement your save logic here
    setEditing(false);
    // You can dispatch an action to update the idea with the editedTitle and editedDescription
  };

  return (
    
    <div className="bg-white rounded-lg shadow-lg p-4 mb-4 w-1/4">
      {isEditing ? (
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
            placeholder="Enter description..."
          />
        </div>
      ) : (
        <div>
          <p className="font-bold text-lg mb-2">{editedTitle}</p>
          <p className="text-gray-600">{editedDescription}</p>
        </div>
      )}

      <div className="flex justify-between items-center mt-4">
        <p className="text-gray-500 text-sm">
          Created: idea.createdTime | Updated: idea.updatedTime
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
            onClick={handleEditClick}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default IdeaCard;
