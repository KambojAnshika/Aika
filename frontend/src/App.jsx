import React from "react";
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";
import Artists from "./artists/Artists";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
