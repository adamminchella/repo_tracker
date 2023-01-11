// SearchBar component

import React, { useState } from "react";
import HomePage from "../../pages/HomePage";

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
    <form onSubmit={ handleSubmit } aria-label="search">
      <label htmlFor="username"></label>
      <input
        type="text"
        name="username"
        value={username}
        id="username"
        onChange={ updateInput }
      />
      <button type="submit" >Submit</button>
    </form>
  );
};

export default SearchBar;
