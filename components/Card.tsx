"use client";

import  { useState } from 'react';

function IdeaCard() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ideaText, setIdeaText] = useState('');

  const handleChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    setField(name, value);
  };

  const setField = (fieldName: any, fieldValue: React.SetStateAction<string>) => {
    switch (fieldName) {
      case 'title':
        setTitle(fieldValue);
        break;
      case 'description':
        setDescription(fieldValue);
        break;
      case 'ideaText':
        setIdeaText(fieldValue);
        break;
      default:
        return;
    }
  };

  return (
    <div className="w-1/3 sm:w-1/4 md:w-1/5 card text-center bg-blue-500 rounded-lg p-4 m-2 grow border-2 shadow-md"
    >
      <div className="font-bold">  
      <h2>Idea Card</h2>
      </div>
      <div className="input-fields">
        <input className="mt-4"
          type="text"
          name="title"
          placeholder="Idea Name"
          value={title}
          onChange={handleChange}
        />
        <input className="mt-4"
          type="text"
          name="description"
          placeholder="Brief Description"
          value={description}
          onChange={handleChange}
        />
        <textarea className="mt-4"
          name="ideaText"
          placeholder="Enter idea here."
          value={ideaText}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default IdeaCard;