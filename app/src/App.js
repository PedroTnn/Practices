import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((res) => res.json())
      .then((pokemon) => console.log(pokemon));
  });
  return <div></div>;
}

export default App;
