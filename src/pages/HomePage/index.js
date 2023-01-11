// HomePage page

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import SearchBar from "../../components/SearchBar";
import axios from "axios";

import RepoCard from "../../components/RepoCard";

import "./styles.css";

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

  const renderUser = () => {
    if (repoList.length != 0) {
      return (
        <div className="user-info-container">
          <img className="avatar" src={repoList[0].owner.avatar_url} />
          <h2 className="avatar-username">{repoList[0].owner.login}</h2>
        </div>
      );
    }
  };

  return (
    <>
      <SearchBar getResult={getData} />
      {renderUser()}
      <div className="home-page">
        {repoList.map((repoData, i) => (
          <RepoCard key={i} data={repoData} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
