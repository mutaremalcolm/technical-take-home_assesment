import React from 'react';

interface NavbarProps {
  onAddNewCard: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onAddNewCard }) => {
  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      <div>
        <p className="font-bold text-white text-2xl">Th!nkPad</p>
      </div>

      <button onClick={onAddNewCard} className="bg-white text-blue-500 border border-white p-2 rounded">
        <p className="font-bold">+ Add new idea</p>
      </button>
    </nav>
  );
};

export default Navbar;
