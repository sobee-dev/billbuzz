import React from 'react'
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [open, setOpen] = useState(false);
    return (
      <div className=' h-9 flex  items-center sticky top-0 z-50 '>
        <div className={`z-20 absolute  rounded-full bg-blue-800/80 transition-all duration-700 ease-in-out
            ${open ? "w-[1000px] h-[1000px] -top-40 -right-40 bg-blue-800/80" : "-top-23 -right-21 w-40 h-40"}`}>
        </div>
        <button onClick={() => setOpen(!open)} className="text-white z-30 absolute top-4 right-4">
            {open ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
        <ul className={`absolute top-20 right-10 text-white text-lg space-y-4 transition-opacity duration-700 ${
          open ? "opacity-100 z-40" : "opacity-0 pointer-events-none"}`}>
         <li><Link to={"/dashboard"}>Home</Link></li> 
         <li> <Link to={"/cac"}>CAC Registratons</Link></li>
         <li> <Link to={"/support"}>Contact</Link></li>

        </ul>
        
      </div>
    )
  }

export default Navbar
