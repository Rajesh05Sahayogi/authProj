import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
const {user}=useSelector((state)=>state.auth)
console.log('navbar user -->', user);
  const handleLogout=()=>{
    console.log("done")
  }
  return (
    <div>
      <nav className="bg-gray-800 flex justify-end">
        <div className="flex space-x-4">
          { user ?( <>
          <Link to="/dashboard" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
            Dashboard
          </Link>
          <button  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          onClick={handleLogout}
          >
          Logout
        </button>
        </>
          ):(
          <Link to="/login" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">
            Login
          </Link>
          )
          }
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
