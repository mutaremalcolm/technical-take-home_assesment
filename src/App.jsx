import React, { useState } from 'react';
import ButtonGradient from './assets/svg/ButtonGradient';
import Header from './components/Header';
import NewIdeaModal from './components/NewIdeaModal';
import IdeaCard from './components/IdeaCard';

const App = () => {
  const [ideas, setIdeas] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  const addIdea = (newIdea) => {
    setIdeas([...ideas, newIdea]);
    setIsModalOpen(false); // Close the modal after adding the idea
  };

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

  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Header openModal={openModal} />
      </div>
      <NewIdeaModal isOpen={isModalOpen} addIdea={addIdea} closeModal={closeModal} />
      <div className='flex flex-col items-center mt-5'>
        {ideas.map((idea, index) => (
          <IdeaCard key={index} index={index} title={idea.title} description={idea.description} deleteIdea={deleteIdea} />
        ))}
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
