"use client"

import IdeaCard from '@/components/IdeaCard';
import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navbar';

interface Idea {
  title: string;
  description: string;
  createdTime: string;
  updatedTime: string;
  content: string;
}

export default function Home() {
  const [ideas, setIdeas] = useState(()=> {
    // Load ideas from local storage or use default values
    const storedIdeas = localStorage.getItem('ideas');
    return storedIdeas ? JSON.parse(storedIdeas) :[
    { title: 'Idea 1', description: 'Description 1', createdTime: 'time1', updatedTime: 'time1', content:'Type your content here' },
    { title: 'Idea 2', description: 'Description 2', createdTime: 'time2', updatedTime: 'time2', content:'Type your content here' },
    { title: 'Idea 3', description: 'Description 3', createdTime: 'time3', updatedTime: 'time3', content:'Type your content here' },
    ];
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

  const handleSave = (updatedIdea: Idea, index: number) => {
    const newIdeas = [...ideas];
    newIdeas[index] = updatedIdea;
    setIdeas(newIdeas);
  };

  useEffect(() => {
    // Save ideas to local storage whenever it changes
    localStorage.setItem('ideas', JSON.stringify(ideas));
  }, [ideas]);


  return (
    <>
      <Navigation onAddNewCard={handleAddNewCard} />
      <div className="flex flex-wrap justify-around">
        {ideas.map((idea: Idea, index: number) => (
          <IdeaCard key={index} idea={idea} onDelete={() => handleDelete(index)} onSave={(updatedIdea: Idea) => handleSave(updatedIdea, index)} />
        ))}
      </div>
    </>
  );
}

