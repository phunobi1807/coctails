import React from 'react';
import './App.scss';
import  ListCocktails from "./components/ListCocktails"

function App() {
  return (
    <div className="App">
        <header><span>C</span>OCKTAIL</header>
        <ListCocktails />
    </div>
  );
}

export default App;
