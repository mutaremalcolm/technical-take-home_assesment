import { sortIdeas } from './lib/utils';
import Header from './components/Header';
import IdeaCard from './components/IdeaCard';
import toast from 'react-hot-toast';
import React, { useState, useEffect } from 'react';
import NewIdeaModal from './components/NewIdeaModal';
import ButtonGradient from './assets/svg/ButtonGradient';

interface Idea {
    id: string;
    title: string;
    description: string;
}

interface LocalData {
    set(key: string, value: any): void;
    get(key: string): any | undefined;
    remove(key: string): void;
}

const localData: LocalData = {
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    get(key) {
        const stored = localStorage.getItem(key);
        return stored === null ? undefined : JSON.parse(stored);
    },
    remove(key) {
        localStorage.removeItem(key);
    }
};

const App: React.FC = () => {
    const [ideas, setIdeas] = useState<Idea[]>(() => localData.get('ideas') || []);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    useEffect(() => {
        localData.set('ideas', ideas);
    }, [ideas]);

    const deleteIdea = (id: string) => {
        const updatedIdeas = ideas.filter((idea) => idea.id !== id);
        setIdeas(updatedIdeas);
        toast.success('Idea Deleted');
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const addIdea = (newIdea: Idea) => {
        setIdeas((prevIdeas) => [...prevIdeas, newIdea]);
        setIsModalOpen(false);
        toast.success('New Idea Created');
    };

    const handleSort = (sortType: string) => {
        const sortedIdeas = sortIdeas(ideas, sortType);
        setIdeas(sortedIdeas);
        toast.success('Ideas Sorted');
    };

    return (
        <>
            <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
                <Header openModal={openModal} handleSort={handleSort} />
            </div>
            <NewIdeaModal isOpen={isModalOpen} addIdea={addIdea} closeModal={closeModal} />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-5 mx-auto px-4'>
                {ideas.map((idea) => (
                    <IdeaCard
                        key={idea.id}
                        id={idea.id}
                        title={idea.title}
                        description={idea.description}
                        deleteIdea={deleteIdea}
                    />
                ))}
            </div>
            <ButtonGradient />
        </>
    );
};

export default App;
