import React, { useState, useEffect } from 'react';
import ButtonGradient from './assets/svg/ButtonGradient';
import Header from './components/Header';
import NewIdeaModal from './components/NewIdeaModal';
import IdeaCard from './components/IdeaCard';

const App = () => {
  const [ideas, setIdeas] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Read from localStorage when the component mounts
  useEffect(() => {
    const storedIdeas = localStorage.getItem('ideas');
    console.log('Retrieved from localStorage:', storedIdeas); // Log to verify
    if (storedIdeas) {
      setIdeas(JSON.parse(storedIdeas));
    }
  }, []);

  // Save to localStorage whenever the ideas array changes
  useEffect(() => {
    console.log('Saving to localStorage:', ideas); // Log to verify
    localStorage.setItem('ideas', JSON.stringify(ideas));
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
