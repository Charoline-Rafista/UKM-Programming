// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="flex space-x-4">
        <Link to="/" className="font-bold">
          Skincare
        </Link>
        <Link to="/ahli-kulit" className="hover:underline">
          Ahli Kulit
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
