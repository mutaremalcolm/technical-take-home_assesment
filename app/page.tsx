'use client';

import { Idea } from '@/lib/types';
import { v4 as uuidv4 } from 'uuid';
import { sampleIdeas } from '@/lib/constants';
import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navbar';
import IdeaCard from '@/components/IdeaCard';
import toast from 'react-hot-toast';


export default function Home() {
  const [ideas, setIdeas] = useState<Idea[]>([]);
  
 
  useEffect(() => {
    const savedIdeas = localStorage.getItem('ideas');
    if (savedIdeas) {
      setIdeas(JSON.parse(savedIdeas))
      console.log('fetching data from localStorage', JSON.parse(savedIdeas))
    }else {
      setIdeas(sampleIdeas);
      localStorage.setItem('ideas', JSON.stringify(sampleIdeas));
      console.log('Setting sample ideas in local storage');
    }
  }, [])

  useEffect(() => {
    if (ideas.length > 0) {
      localStorage.setItem('ideas', JSON.stringify(ideas));
      console.log("setting local storage," , JSON.stringify(ideas))
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
    content: ''
  };

   setIdeas([...ideas, newCard]);
};

const handleSave = (updatedIdea: Idea, index: number) => {
  const newIdeas = [...ideas];
  newIdeas[index] = updatedIdea;
  setIdeas(newIdeas);
  localStorage.setItem('ideas', JSON.stringify(newIdeas));
  console.log('executed')
  toast.success('💡 Save Successful', {
    position: "bottom-center"
  })
};

const handleDelete = (index: number) => {
  const newIdeas = [...ideas];
  newIdeas.splice(index, 1);
  setIdeas(newIdeas);
  localStorage.removeItem('ideas');
  toast.success('🗑️ Delete Successful', {
    position: "bottom-center"
  })
};

const handleSortByCreatedTime = () => {
  const sortedIdeas = [...ideas].sort(
    (a, b) => new Date(a.createdTime).getTime() - new Date(b.createdTime).getTime()
  );
  setIdeas(sortedIdeas);
  toast.success('🔄 Sort Successful', {
    position: "bottom-center"
  })
};

 const handleSortByTitle = () => {
  const sortedIdeas = [...ideas].sort((a, b) => a.title.localeCompare(b.title));
  setIdeas(sortedIdeas);
  toast.success('🔄 Sort Successful', {
    position: "bottom-center"
  })
};

 const handleSortByTitleReverse = () => {
  const sortedIdeas = [...ideas].sort((a, b) => b.title.localeCompare(a.title));
  setIdeas(sortedIdeas);
  toast.success('🔄 Sort Successful', {
    position: "bottom-center"
  })
};

const handleClearIdeas = () => {
  setIdeas([]);
  localStorage.removeItem('ideas');
  toast.success('🧹  Clear Successful', {
    position: "bottom-center"
  })
};


const handleSampleIdeas = () => {
    setIdeas(sampleIdeas);
    localStorage.setItem('ideas', JSON.stringify(sampleIdeas));
    toast.success('🌟 Sample Ideas Added', {
      position: 'bottom-center',
    });
}

  return (
    <>
      <Navigation onAddNewCard={handleAddNewCard} />
      <header className="flex flex-col items-center">
        <div className="flex">
        <button onClick={handleSampleIdeas} 
          className="bg-purple-500 text-white p-2 mb-2 rounded text-sm mt-4 font-bold
         hover:bg-gray-400 focus:outline-none focus:shadow-outline justify-center">
          Sample Ideas
        </button>
        <button onClick={handleSortByCreatedTime} 
          className="bg-orange-500 text-white p-2 mb-2 rounded text-sm mt-4 ml-3 font-bold
         hover:bg-gray-400 focus:outline-none focus:shadow-outline justify-center">
          Sort By Date
        </button>
        <button onClick={handleSortByTitle} 
          className="bg-green-500 text-white p-2 mb-2 rounded text-sm mt-4 ml-3 font-bold
         hover:bg-gray-400 focus:outline-none focus:shadow-outline justify-center">
          Sort A-Z
        </button>
          <button onClick={handleSortByTitleReverse} 
          className="bg-blue-500 text-white p-2 mb-2 rounded text-sm mt-4  ml-3 font-bold
         hover:bg-gray-400 focus:outline-none focus:shadow-outline justify-center">
           Sort Z-A
        </button>
        <button
          onClick={handleClearIdeas}
          className="bg-red-500 text-white p-2 mb-2 rounded text-sm mt-4 ml-3 font-bold
           hover:bg-gray-600 focus:outline-none focus:shadow-outline justify-center"
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



