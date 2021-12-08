import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Search from "./components/Search";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="container">
      <Header />
      <Home />
      <Search />
      <Nav />
    </div>
  );
}

export default App;
