import React from 'react';
import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
         Hello SheCoder!
        </p>
      </header>
      < Weather    city="paris"/>
    </div>
  );
}

export default App;
