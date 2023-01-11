import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css"

const RepoCard = ({ data }) => {
  
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    async function fetchLanguageData() {
      const languagesData = await axios.get(data.languages_url);

      let total = 0;
      for (let language in languagesData.data) {
        total += languagesData.data[language];
      }

      const arr = [];
      for (let language in languagesData.data) {
        arr.push({
          language: language,
          percent: Math.round((languagesData.data[language] / total) * 100),
        });
      }
      setLanguages(arr);
    }
    fetchLanguageData();
  }, []);


  const pushedDate = new Date(data.pushed_at).toDateString()
  let partPushedDate = pushedDate.slice(3).replace(" 202", ", 202").replace(" 0", " ")

  const createdDate = new Date(data.created_at).toDateString()
  let partCreatedDate = createdDate.slice(3).replace(" 202", ", 202").replace(" 0", " ")

  return (
    <div className="all-cards">
      <span className="name-and-visibility">
        <div className="card" id="name">
          <h3>{data.name}</h3>
        </div>
        <div className="card" id="visibility">
          <p>
            {data.visibility.charAt(0).toUpperCase() + data.visibility.slice(1)}
          </p>
        </div>
      </span>
      <div className="card" id="link">
        <a href={data.html_url}>{data.html_url}</a>
      </div>
      <div className="card" id="created">
        <p>{data.name}</p>
        <p id="created-on">created on</p>
        <p>{partCreatedDate}</p>
      </div>
      <span className="fork-and-update">
        <div className="card" id="fork">
          <img src="../assets/images/fork_icon.png" alt="fork" />
          <p>{data.forks_count}</p>
        </div>
        <div className="card" id="last-push">
          <p id="updated">Updated on</p>
          <p>{partPushedDate}</p>
        </div>
      </span>
      <div className="card" id="language">
        {languages.map((language) => (
          <>
            <h4>{language.language}</h4>
            <p>{language.percent}%</p>
          </>
        ))}
        </div>
    </div>
  );
};

export default RepoCard;
