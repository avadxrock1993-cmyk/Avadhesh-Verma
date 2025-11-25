import React from 'react';

interface HeaderProps {
  onHomeClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onHomeClick }) => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b-4 border-red-600 shadow-md">
      <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 
          onClick={onHomeClick}
          className="text-2xl md:text-3xl font-extrabold text-red-600 tracking-tighter cursor-pointer hover:opacity-80 transition-opacity"
        >
          THE GYM CKBT
        </h1>
        <nav>
          <button 
            onClick={onHomeClick}
            className="text-sm font-semibold text-gray-600 hover:text-red-600 uppercase tracking-wide"
          >
            Home
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
