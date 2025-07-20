import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="bg-white text-blue-900 p-4 flex justify-between items-center w-full">
      <h1 className="text-xl font-bold">CareCircle</h1>
      <ul className="flex gap-3">
        
        <li>
            <Link to="/" className=" relative hover:text-black hover:font-bold cursor-pointer">Home</Link></li>
        <li><Link to="/about" className="hover:text-black hover:font-bold cursor-pointer">About</Link></li>
        <li>
          <Link to="/contact" className="hover:text-black hover:font-bold cursor-pointer">Contact</Link>
        </li>
      </ul>
      <h1>
        <Link to="/login" className="bg-blue-100 p-2 rounded-lg hover:bg-blue-500">LOGIN</Link></h1>
    </nav>
  );
}

export default Navbar;
