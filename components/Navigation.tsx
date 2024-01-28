import React from 'react';
import CreateNewCard from './CreateNewCard';


function Navigation() {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <span className="text-2xl font-bold">Ideas Board</span>
      </div>
      <button onClick={CreateNewCard} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
        </svg>
      </button>
    </nav>
  );
}

export default Navigation;