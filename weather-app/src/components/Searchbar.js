import React, { useState } from 'react';

function Searchbar({ onCityChange }) {
    const [cityInput, setCityInput] = useState('');

    function handleInputChange(event) {
        setCityInput(event.target.value);
    }

    function handleSearch() {
        onCityChange(cityInput); // Ensure that you're using the correct prop name here
    }

    return (
        <div className="search-bar-container">
          <input
            type="text"
            placeholder="Enter city name"
            value={cityInput}
            onChange={handleInputChange}
            className="city-input"
          />
          <button onClick={handleSearch} className="search-button">
            Search
          </button>
        </div>
      );
      
}

export default Searchbar;
