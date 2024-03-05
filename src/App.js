import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";

function App() {
  const [showSideBar, setShowSideBar] = useState(true);

  return (
    <Router>
      <Navbar setShowSideBar={setShowSideBar} />

      <Sidebar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
