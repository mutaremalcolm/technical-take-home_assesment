
import { localData } from './lib/utils';
import { sortIdeas } from './lib/utils';

import Header from './components/Header';
import IdeaCard from './components/IdeaCard';
import toast, { Toaster } from 'react-hot-toast';
import React, { useState, useEffect } from 'react';
import NewIdeaModal from './components/NewIdeaModal';
import ButtonGradient from './assets/svg/ButtonGradient';




const App = () => {
    const [ideas, setIdeas] = useState(() => localData.get('ideas') || []);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        localData.set('ideas', ideas);
    }, [ideas]);

    const deleteIdea = (id) => {
        const updatedIdeas = ideas.filter((idea) => idea.id !== id);
        setIdeas(updatedIdeas);
        toast.success('Idea Deleted')
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const addIdea = (newIdea) => {
        setIdeas((prevIdeas) => [...prevIdeas, newIdea]);
        setIsModalOpen(false);
        toast.success('New Idea Created');
    };

    const handleSort = (sortType) => {
        const sortedIdeas = sortIdeas(ideas, sortType);
        setIdeas(sortedIdeas);
        toast.success('Ideas Sorted')
    };

    return (
        <>
            <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
                <Header openModal={openModal} handleSort={handleSort} />
            </div>
            <NewIdeaModal isOpen={isModalOpen} addIdea={addIdea} closeModal={closeModal} />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-5 mx-auto px-4'>
                {ideas.map((idea) => (
                    <IdeaCard key={idea.id} id={idea.id} title={idea.title} description={idea.description} deleteIdea={deleteIdea} />
                ))}
            </div>
            <ButtonGradient />
        </>
    );
};

export default App;
