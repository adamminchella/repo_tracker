// SearchBar component

import React, { useState } from "react";

import "./styles.css";

const SearchBar = ({ getResult }) => {
  const [username, setUsername] = useState("");

  const updateInput = (e) => {
    const input = e.target.value;
    setUsername(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getResult(username);
    setUsername("");
  };

  return (
    <header>
      <form onSubmit={handleSubmit} aria-label="search">
        <label htmlFor="username"></label>

        <div className="search-container">
          <input
            placeholder="Enter username..."
            type="text"
            name="username"
            value={username}
            id="username"
            onChange={updateInput}
          />
          <button className="search-button" type="submit">
            <img
              className="search-icon"
              src="../assets/images/search_icon.svg"
            />
          </button>
        </div>
      </form>
    </header>
  );
};

export default SearchBar;
