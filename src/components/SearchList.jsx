import React from "react";
import Card from "./Card";

function SearchList({ filteredBook }) {
  const filtered = filteredBook.map((book) => <Card key={book.id} book={book} />);
  return <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center text-center gap-4 mt-4 ">{filtered}</div>;
}

export default SearchList;
