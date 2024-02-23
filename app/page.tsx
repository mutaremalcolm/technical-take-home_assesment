'use client';

import { Idea } from '@/lib/types';
import { v4 as uuidv4 } from 'uuid';
import { sampleIdeas } from '@/lib/constants';
import React, { useState, useEffect } from 'react';

import toast from 'react-hot-toast';
import IdeaCard from '@/components/IdeaCard';
import Navigation from '@/components/Navbar';

export default function Home() {
  const [ideas, setIdeas] = useState<Idea[]>([]);
   
  useEffect(() => {
    const savedIdeas = localStorage.getItem('ideas');
    if (savedIdeas) {
      setIdeas(JSON.parse(savedIdeas).map((idea: Idea) => ({
        ...idea,
        createdTime: new Date(idea.createdTime),
        updatedTime: new Date(idea.updatedTime),
      })));
    } else {
      setIdeas([]);
      localStorage.setItem('ideas', JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    if (ideas.length > 0) {
      localStorage.setItem('ideas', JSON.stringify(ideas));
    }
  }, [ideas]);

  const handleAddNewCard = () => {
    const currentDate = new Date();

    const newCard : Idea = {
    uuid: uuidv4(),
    title: '',
    description: '',
    createdTime: currentDate,
    updatedTime: currentDate,
    content: '',
    isNew: true,
  };

   setIdeas([...ideas, newCard]);
};

const handleSave = (updatedIdea: Idea, index: number) => {
  const newIdeas = [...ideas];
  newIdeas[index] = {...updatedIdea, isNew: false };
  setIdeas(newIdeas);
  localStorage.setItem('ideas', JSON.stringify(newIdeas));
  if (ideas.length > 0) {
  toast.success('💡 Save Successful', {
    position: "bottom-center",
    style: {
      background: 'slate',
    },
  })
};
};

const handleDelete = (index: number) => {
  const newIdeas = [...ideas];
  newIdeas.splice(index, 1);
  setIdeas(newIdeas);
  localStorage.removeItem('ideas');
  if (ideas.length > 0) {
  toast.success('🗑️ Delete Successful', {
    position: "bottom-center",
    style: {
      background: 'slate',
    },
  })
};
};

const handleSortByCreatedTime = () => {
  const sortedIdeas = [...ideas].sort(
    (a, b) => new Date(a.createdTime).getTime() - new Date(b.createdTime).getTime()
  );
  setIdeas(sortedIdeas);
  if (ideas.length > 0) {
  toast.success('🔄 Sort Successful', {
    position: "bottom-center",
    style: {
      background: 'slate',
    },
  })
};
};

 const handleSortByTitle = () => {
  const sortedIdeas = [...ideas].sort((a, b) => a.title.localeCompare(b.title));
  setIdeas(sortedIdeas);
  if (ideas.length > 0) {
  toast.success('🔄 Sort Successful', {
    position: "bottom-center",
    style: {
      background: 'slate',
    },
  })
};
};

 const handleSortByTitleReverse = () => {
  const sortedIdeas = [...ideas].sort((a, b) => b.title.localeCompare(a.title));
  setIdeas(sortedIdeas);
  if (ideas.length > 0) {
  toast.success('🔄 Sort Successful', {
    position: "bottom-center",
    style: {
      background: 'slate',
    },
  })
};
};

const handleClearIdeas = () => {
  setIdeas([]);
  localStorage.removeItem('ideas');
  if (ideas.length > 0) {
  toast.success('🧹  Clear Successful', {
    position: "bottom-center",
    style: {
      background: 'slate',
    },
  })
};
};


const handleSampleIdeas = () => {
    setIdeas(sampleIdeas);
    localStorage.setItem('ideas', JSON.stringify(sampleIdeas));
    toast.success('🌟 Sample Ideas Added', {
      position: 'bottom-center',
      style: {
        background: 'slate',
      },
    });
}

  return (
    <>
      <Navigation onAddNewCard={handleAddNewCard} />
      <header className="flex flex-col items-center">
        <div className="flex flex-wrap justify-center sm:justify-start">
        <button onClick={handleSampleIdeas} 
          className="bg-opacity-50 text-white p-2 mb-2 rounded text-sm mt-4 font-bold
          hover:bg-gray-400 shadow-lg transition-transform duration-300 transform hover:-translate-y-1 
          hover:scale-105 focus:outline-none focus:shadow-outline justify-center  border">
          Sample Ideas
        </button>
        <button onClick={handleSortByCreatedTime} 
          className="bg-opacity-50 text-white p-2 mb-2 rounded text-sm mt-4 ml-3 font-bold
          hover:bg-gray-400 shadow-lg transition-transform duration-300 transform hover:-translate-y-1 
          hover:scale-105bg-gray-400 focus:outline-none focus:shadow-outline justify-center border">
          Sort By Date
        </button>
        <button onClick={handleSortByTitle} 
          className="bg-opacity-50 text-white p-2 mb-2 rounded text-sm mt-4 ml-3 font-bold
          hover:bg-gray-400 shadow-lg transition-transform duration-300 transform hover:-translate-y-1 
          hover:scale-105bg-gray-400 focus:outline-none focus:shadow-outline justify-center border">
          Sort A-Z
        </button>
          <button onClick={handleSortByTitleReverse} 
          className="bg-opacity-50 text-white p-2 mb-2 rounded text-sm mt-4  ml-3 font-bold
          hover:bg-gray-400 shadow-lg transition-transform duration-300 transform hover:-translate-y-1 
          hover:scale-105bg-gray-400 focus:outline-none focus:shadow-outline justify-center border">
           Sort Z-A
        </button>
        <button
          onClick={handleClearIdeas}
          className="bg-opacity-50 text-white p-2 mb-2 rounded text-sm mt-4 ml-3 font-bold
          hover:bg-gray-400 shadow-lg transition-transform duration-300 transform hover:-translate-y-1 
          hover:scale-105bg-gray-400 focus:outline-none focus:shadow-outline justify-center border"
        >
          Delete All
        </button>
        </div>
      </header>
      <main className="flex flex-wrap justify-around">
        {ideas.map((idea: Idea, index: number) => (
          <IdeaCard key={idea.uuid} idea={idea} onDelete={() => handleDelete(index)} 
          onSave={(updatedIdea: Idea) => handleSave(updatedIdea, index)} 
          />
        ))}
      </main>
      <input type="text" style={{ opacity: 0, position: 'absolute', zIndex: -1 }} />
    </>
  );
}



