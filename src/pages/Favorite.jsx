import React, { useEffect, useState } from "react";
import Card from "../components/Card.jsx";
import Layout from "../components/Layout.jsx";

export default function Favorite() {
  let [favoriteBook, setFavoriteBook] = useState(null);

  let data = JSON.parse(localStorage.getItem("favoriteBook"));

  useEffect(() => {
    setFavoriteBook(data);
  }, []);

  return (
    <>
      <Layout>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center text-center gap-4 mt-4 ">
          {favoriteBook && (
            <>
              {favoriteBook.map((book) => {
                return <Card key={book.id} book={book} />;
              })}
            </>
          )}
        </div>
        {!favoriteBook && (
          <div className="flex">
            <div className="font-bold text-xl mx-auto">NO FAVORITE BOOK YET</div>
          </div>
        )}
      </Layout>
    </>
  );
}
