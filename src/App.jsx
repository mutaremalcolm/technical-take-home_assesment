import React, { useState, useEffect } from 'react';
import ButtonGradient from './assets/svg/ButtonGradient';
import Header from './components/Header';
import NewIdeaModal from './components/NewIdeaModal';
import IdeaCard from './components/IdeaCard';
import { localData } from './lib/utils'; 


const App = () => {
  const [ideas, setIdeas] = useState(() => localData.get('ideas') || []);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    localData.set('ideas', ideas);
  }, [ideas]);


  const deleteIdea = (index) => {
    const updatedIdeas = ideas.filter((_, i) => i !== index);
    setIdeas(updatedIdeas);
  };

  const openModal = () => {
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const addIdea = (newIdea) => {
    setIdeas((prevIdeas) => [...prevIdeas, newIdea]);
    setIsModalOpen(false); // Close the modal after adding the idea
  };


  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Header openModal={openModal} />
      </div>
      <NewIdeaModal isOpen={isModalOpen} addIdea={addIdea} closeModal={closeModal} />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-5 ml-5 mr-5 px-4'>
        {ideas.map((idea, index) => (
          <IdeaCard key={index} index={index} title={idea.title} description={idea.description} deleteIdea={deleteIdea} />
        ))}

      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
