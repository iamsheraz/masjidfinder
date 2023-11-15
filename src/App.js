import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Masjid Finder
        </h1>
      </header>
      <main>
        <SearchBar /* props if needed */ />
      </main>
      <footer className="App-footer">
        {/* Fotter content */}
      </footer>
    </div>
  );
}

export default App;
