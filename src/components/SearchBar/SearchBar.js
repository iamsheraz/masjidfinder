import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchClick = () => {
        onSearch(searchTerm);
    };

    const handleKeyPress = (event) => {
        // Trigger the search when the user presses "Enter"
        if (event.key === 'Enter') {
            handleSearchClick();
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                className="search-input"
                placeholder="Type Masjid name or location"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            <button className="search-button" onClick={handleSearchClick}>
                Search
            </button>
        </div>
    );
};

export default SearchBar;
