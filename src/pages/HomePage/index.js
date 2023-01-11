// HomePage page

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import SearchBar from "../../components/SearchBar";
import axios from "axios";


const HomePage = (searchTerm) => {

  const username = searchTerm

  const [repoList, setRepoList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = (username) => {

      // Function to g and fetch the data from the fish API
      async function loadRepo () { 
          setLoading(true);
          const { data } = await axios.get(`https://api.github.com/users/${username}/repos`);
          console.log(data)
          setRepoList(data);
          setLoading(false);
      }

      loadRepo();

  }

  return (
    <>
      <h1>Home</h1>
      <SearchBar  getResult={getData}/>
    </>
  );
};

export default HomePage;
