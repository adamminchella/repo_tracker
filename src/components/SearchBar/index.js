import React, { useState } from "react";

const SearchBar = ({ submitForm }) => {
  const [username, setUsername] = useState("");

  const updateInput = (e) => {
    const input = e.target.value;
    setUsername(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(username);
    setUsername("");
  };

  return (
    <form onSubmit={handleSubmit} aria-label="search">
      <label htmlFor="username"></label>
      <input
        type="text"
        value={username}
        id="username"
        onChange={updateInput}
      />
      <input type="submit" value="Search" />
    </form>
  );
};

export default SearchBar;
