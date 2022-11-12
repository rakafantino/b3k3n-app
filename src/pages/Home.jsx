import React, { useEffect, useState } from "react";
import Layout from "../components/Layout.jsx";
import axios from "axios";
import SearchList from "../components/SearchList.jsx";

export default function Home() {
  let [categories, setCategories] = useState([]);
  let [bookList, setBookList] = useState([]);
  let [searchField, setSearchField] = useState("");
  let [categoryId, setCategoryId] = useState("");
  let [page, setPage] = useState(2);
  let [endPage, setEndPage] = useState(false);

  const getCategory = () => {
    axios
      .get("/fee-assessment-categories", {
        headers: {
          "Access-Control-Allow-Origin": "https://b3k3n-app.vercel.app/",
        },
      })
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => console.warn(err));
  };

  const getBookList = (id) => {
    axios
      .get(`/fee-assessment-books?categoryId=${id}&page=1&size=10`)
      .then((res) => {
        setBookList(res.data);
      })
      .catch((err) => setBookList([]));
  };

  const nextPage = (id, page) => {
    axios
      .get(`/fee-assessment-books?categoryId=${id}&page=${page}&size=10`)
      .then((res) => {
        setBookList(res.data);
        setEndPage(false);
      })
      .catch((err) => {
        setBookList([]);
        setEndPage(true);
      });
  };

  const previousPage = async (id, page) => {
    axios
      .get(`/fee-assessment-books?categoryId=${id}&page=${page - 2}&size=10`)
      .then((res) => {
        setBookList(res.data);
        setEndPage(false);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const filteredBook = bookList.filter((book) => {
    return book.title.toLowerCase().includes(searchField.toLowerCase()) || book.authors.find((auth) => auth.toLowerCase().includes(searchField.toLowerCase()));
  });

  function searchList() {
    return <SearchList filteredBook={filteredBook} />;
  }

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <>
      <Layout>
        <form className="flex justify-center">
          <input type="text" className="border border-gray-600 my-3 mx-auto rounded-md px-1 focus:outline-none md:w-96 w-60" placeholder="Search by title or authors..." onChange={handleChange} />
        </form>
        <div className="flex items-center flex-col gap-2">
          <h2>Categories</h2>
          <select name="book-categories" className="py-2 text-sm shadow-md " onClick={(e) => (getBookList(e.target.value), setCategoryId(e.target.value), setPage(2))}>
            <option value="">Select Categories</option>
            {categories && (
              <>
                {categories.map((category) => {
                  return (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  );
                })}
              </>
            )}
          </select>
        </div>
        <div className="min-h-screen">
          {endPage ? (
            <div className="flex justify-items-center mt-96">
              <div className="font-bold text-xl mx-auto">END OF THE PAGE☹️</div>
            </div>
          ) : (
            <>{searchList()}</>
          )}
        </div>

        <div className="flex gap-3 justify-center items-center my-4">
          <button className="py-2 px-4 bg-indigo-600 rounded-sm text-white " onClick={() => (previousPage(categoryId, page), setPage(page - 1))} disabled={page === 2}>
            {"<<"}
          </button>
          {page - 1}
          <button className="py-2 px-4 bg-indigo-600 rounded-sm text-white" onClick={() => (nextPage(categoryId, page), setPage(page + 1))} disabled={endPage === true}>
            {">>"}
          </button>
        </div>
      </Layout>
    </>
  );
}
