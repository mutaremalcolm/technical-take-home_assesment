import React from 'react';

interface NavbarProps {
  onAddNewCard: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onAddNewCard }) => {
  return (
    <nav className="bg-gray-800 p-4 flex flex-col md:flex-row md:justify-between md:items-center border">
      <div className="mb-2 md:mb-0">
        <p className="font-bold text-white text-2xl">Th!nkPad</p>
      </div>

      <button
        onClick={onAddNewCard}
        className="bg-gray text-white border border-white p-2 rounded hover:bg-gray-400"
      >
        <p className="font-bold">+ Add new idea</p>
      </button>
    </nav>
  );
};

export default Navbar;
