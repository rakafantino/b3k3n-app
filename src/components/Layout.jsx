import React from "react";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";

export default function Favorite({children}) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section>{children}</section>
      </main>
      <Footer />
    </>
  );
}
