import React from "react";
import "../index.css";

function Card({ book }) {
  return (
    <div className="bg-slate-200 pb-3 rounded-b-sm shadow-md relative containerr">
      <img src={book.cover_url} alt={book.title} className="image h-96 w-auto opacity-100 block transition duration-500 ease-in backface-hidden hover:opacity-30" />
      <div className="middle group hover:opacity-100">
        <button className="bg-indigo-600 py-4 px-4 text-white text-sm rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        </button>
      </div>
      <div className="pt-3 text-sm">{book.title}</div>
    </div>
  );
}

export default Card;
