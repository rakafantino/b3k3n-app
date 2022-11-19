import React, { useState } from "react";
import Card from "./Card";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function SearchList({ filteredBook }) {
  let data = JSON.parse(localStorage.getItem("favoriteBook"));
  let book = data === null ? [] : data;
  let [favoriteBook, setFavoriteBook] = useState(book);

  const handleFavorites = (book) => {
    favoriteBook.push(book);
    // setFavoriteBook([...favoriteBook, book]);
    localStorage.setItem("favoriteBook", JSON.stringify(favoriteBook));
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: <strong>Successfully</strong>,
      html: <i>Adding book into favorite</i>,
      icon: "success",
    });
  };

  const filtered = filteredBook.map((book) => <Card key={book.id} book={book} handleFavorites={handleFavorites} />);
  return <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center text-center gap-4 mt-4 ">{filtered}</div>;
}

export default SearchList;
