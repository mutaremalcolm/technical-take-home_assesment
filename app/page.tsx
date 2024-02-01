"use client"

import React, { useState } from 'react';
import IdeaCard from '@/components/IdeaCard';
import Navigation from '@/components/Navbar';

export default function Home() {
  const [ideas, setIdeas] = useState([
    { title: 'Idea 1', description: 'Description 1', createdTime: 'time1', updatedTime: 'time1', content:'Type your content here' },
    { title: 'Idea 2', description: 'Description 2', createdTime: 'time2', updatedTime: 'time2', content:'Type your content here' },
    { title: 'Idea 3', description: 'Description 3', createdTime: 'time3', updatedTime: 'time3', content:'Type your content here' },
  ]);

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

  return (
    <>
      <Navigation onAddNewCard={handleAddNewCard} />
      <div className="flex flex-wrap justify-around">
        {ideas.map((idea, index) => (
          <IdeaCard key={index} idea={idea} onDelete={() => handleDelete(index)} />
        ))}
      </div>
    </>
  );
}
