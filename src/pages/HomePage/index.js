// HomePage page

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import SearchBar from "../../components/SearchBar";
import axios from "axios";

import RepoCard from "../../components/RepoCard";

const HomePage = () => {
  const [repoList, setRepoList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = (username) => {
    // Function to g and fetch the data from the fish API
    async function loadRepo() {
      setLoading(true);
      const { data } = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );
      console.log(data);
      setRepoList(data);
      setLoading(false);
    }

    loadRepo();
  };

  console.log(repoList);

  return (
    <>
      <SearchBar getResult={getData} />
      <div className="home-page">
        {repoList.map((repoData, i) => (
          <RepoCard key={i} data={repoData} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
