// components/Navbar.js

const Navbar = () => {
    return (
      <nav className="bg-blue-500 p-4 flex justify-between items-center">
        {/* Title on the left */}
        <div>
          <p className="font-bold text-white text-2xl">Th!nkPad</p>
        </div>
  
        {/* "+" on the right */}
        <div className="bg-white text-blue-500 border border-white p-2 rounded">
          <p className="font-bold">+ Add new idea</p>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  