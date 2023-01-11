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
        <label htmlFor="username">Please enter GitHub username:</label>
        <br />
        <div className="search-container">
          <input
            type="text"
            name="username"
            value={username}
            id="username"
            onChange={updateInput}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </header>
  );
};

export default SearchBar;
