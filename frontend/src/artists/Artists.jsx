import React from "react";
import Navbar from "../components/Navbar";
import Artist from "../components/Artist";
import Footer from "../components/Footer";

function Artists() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Artist />
      </div>
      <Footer />
    </>
  );
}

export default Artists;
