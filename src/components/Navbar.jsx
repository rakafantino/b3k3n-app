import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex sm:justify-evenly justify-between h-10 bg-indigo-600 text-white rounded-b-md px-10 py-1 ">
      <div>
        <Link to="/">
          <h1>B3k3n App</h1>
        </Link>
      </div>
      <div>
        <Link to="/favorite">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        </Link>
      </div>
    </nav>
  );
}
