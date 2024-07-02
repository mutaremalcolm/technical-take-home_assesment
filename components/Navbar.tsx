import React from "react";
import { ModeToggle } from "../components/ui/ModeToggle";

interface NavbarProps {
  onAddNewCard: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onAddNewCard }) => {
  return (
    <nav className="bg-primary-foreground text-primary p-4 flex justify-between items-center border border-border">
      <div>
        <p className="font-bold text-2xl">Th!nkPad</p>
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={onAddNewCard}
          className="bg-primary text-primary-foreground border border-primary-foreground p-2 rounded hover:bg-primary/75"
        >
          <p className="font-bold">+ Add new idea</p>
        </button>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
