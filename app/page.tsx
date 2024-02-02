'use client';

import React, { useState, useEffect, useRef } from 'react';
import Navigation from '@/components/Navbar';
import IdeaCard from '@/components/IdeaCard';
import { Idea } from '@/lib/types';


export default function Home() {
  //refactor ✔
  const [ideas, setIdeas] = useState<Idea[]>([]);
    
//     () => {
//     // Load ideas from local storage or use default values
//     const storedIdeas = localStorage.getItem('ideas');
//     return storedIdeas ? JSON.parse(storedIdeas) : defaultIdeas;
// });


// reading-local storage 
useEffect(() => {
  const savedIdeas = localStorage.getItem('ideas');
  if (savedIdeas) {
    setIdeas(JSON.parse(savedIdeas))
    console.log('fetching data from localStorage', JSON.parse(savedIdeas))
  }
}, [setIdeas])

// setting-local storage
useEffect(() => {
  if (ideas.length > 0) {
    localStorage.setItem('ideas', JSON.stringify(ideas));
    console.log("setting local storage," , JSON.stringify(ideas))
  }
}, [ideas]);


//🎯 remove all this - another way to do this (form onFocus)
// const titleInputRef = useRef<HTMLInputElement>(null);

// useEffect(() => {
//   // Focus on the title input when a new card is created
//   if (titleInputRef.current) {
//     titleInputRef.current.focus();
//   }
// }, [ideas]); // Trigger the effect when ideas change

// setTimeout(() => {
//   if (titleInputRef.current) {
//     titleInputRef.current.focus();
//   }
// }, 0);


const handleAddNewCard = () => {
  // Create a new card 
  const newCard : Idea = {
    title: '',
    description: '',
    createdTime: 'new time',
    updatedTime: 'new time',
    content: ''
  };

  // Add the new card to the existing ideas
  console.log('🎯this is my ideas', ideas)
  console.log('🎯this is my newCard', newCard)
  setIdeas([...ideas, newCard]);

  console.log("Created a new card in local state")
};

const handleSave = (updatedIdea: Idea, index: number) => {
  const newIdeas = [...ideas];
  newIdeas[index] = updatedIdea;
  setIdeas(newIdeas);
};

const handleDelete = (index: number) => {
  const newIdeas = [...ideas];
  newIdeas.splice(index, 1);
  setIdeas(newIdeas);
};

const handleSortByCreatedTime = () => {
  const sortedIdeas = [...ideas].sort((a, b) => new Date(a.createdTime).getTime() - new Date(b.createdTime).getTime());
  setIdeas(sortedIdeas);
};

const handleClearIdeas = () => setIdeas([]);

  return (
    <>
      <Navigation onAddNewCard={handleAddNewCard} />
      <header className="flex flex-col items-center">
        <div className="flex">
          <button onClick={handleSortByCreatedTime} 
          className="bg-blue-500 text-white p-2 mb-2 rounded text-sm mt-4 font-bold
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
      </header>
      <main className="flex flex-wrap justify-around">
        {ideas.map((idea: Idea, index: number) => (
          <IdeaCard key={index} idea={idea} onDelete={() => handleDelete(index)} onSave={(updatedIdea: Idea) => handleSave(updatedIdea, index)} />
        ))}
      </main>
      {/* hidden input for focusing */}
      <input type="text" style={{ opacity: 0, position: 'absolute', zIndex: -1 }} />
    </>
  );
}

