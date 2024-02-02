"use client"

import IdeaCard from '@/components/IdeaCard';
import React, { useState, useEffect, useRef } from 'react';
import Navigation from '@/components/Navbar';

interface Idea {
  title: string;
  description: string;
  createdTime: string;
  updatedTime: string;
  content: string;
}

export default function Home() {
  const defaultIdeas = [
    { title: 'Idea 1', description: 'Description 1', createdTime: 'time1', updatedTime: 'time1', content:'Type your content here' },
    { title: 'Idea 2', description: 'Description 2', createdTime: 'time2', updatedTime: 'time2', content:'Type your content here' },
    { title: 'Idea 3', description: 'Description 3', createdTime: 'time3', updatedTime: 'time3', content:'Type your content here' },
  ];

  
  const [ideas, setIdeas] = useState(()=> {
    // Load ideas from local storage or use default values
    const storedIdeas = localStorage.getItem('ideas');
    return storedIdeas ? JSON.parse(storedIdeas) : defaultIdeas;
});

  const handleDelete = (index: number) => {
    const newIdeas = [...ideas];
    newIdeas.splice(index, 1);
    setIdeas(newIdeas);
  };

  const handleAddNewCard = () => {
    // Create a new card 
    const newCard = {
      title: 'New Idea',
      description: 'New Description',
      createdTime: 'new time',
      updatedTime: 'new time',
      content: "Type your ideas here"
    };

    // Add the new card to the existing ideas
    setIdeas([...ideas, newCard]);
  };

  setTimeout(() => {
    if (titleInputRef.current) {
      titleInputRef.current.focus();
    }
  }, 0);


  const handleSave = (updatedIdea: Idea, index: number) => {
    const newIdeas = [...ideas];
    newIdeas[index] = updatedIdea;
    setIdeas(newIdeas);
  };

  const handleSortByCreatedTime = () => {
    const sortedIdeas = [...ideas].sort((a, b) => new Date(a.createdTime).getTime() - new Date(b.createdTime).getTime());
    setIdeas(sortedIdeas);
  };

  const handleClearIdeas = () => {
    // Clear all ideas
    setIdeas([]);
  };

  useEffect(() => {
    // Save ideas to local storage whenever it changes
    localStorage.setItem('ideas', JSON.stringify(ideas));
  }, [ideas]);

  const titleInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Focus on the title input when a new card is created
    if (titleInputRef.current) {
      titleInputRef.current.focus();
    }
  }, [ideas]); // Trigger the effect when ideas change



  return (
    <>
      <Navigation onAddNewCard={handleAddNewCard} />
      <div className="flex flex-col items-center">
        <div className="flex">
          <button onClick={handleSortByCreatedTime} 
          className="bg-blue-300 text-white p-2 mb-2 rounded text-sm mt-4 font-bold
         hover:bg-gray-400 focus:outline-none focus:shadow-outline justify-center">
          Sort Ideas
        </button>
        <button
          onClick={handleClearIdeas}
          className="bg-red-500 text-white p-2 mb-2 rounded text-sm mt-4 ml-3 font-bold hover:bg-gray-600 focus:outline-none focus:shadow-outline justify-center"
        >
          Clear Ideas
        </button>
        </div>
        </div>
      <div className="flex flex-wrap justify-around">
        {ideas.map((idea: Idea, index: number) => (
          <IdeaCard key={index} idea={idea} onDelete={() => handleDelete(index)} onSave={(updatedIdea: Idea) => handleSave(updatedIdea, index)} />
        ))}
      </div>
      {/* hidden input for focusing */}
      <input type="text" style={{ opacity: 0, position: 'absolute', zIndex: -1 }} ref={titleInputRef} />
    </>
  );
}

