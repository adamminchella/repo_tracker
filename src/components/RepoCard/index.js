import React, { useEffect, useState } from "react";
import axios from "axios";

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

  return (
    <>
      <h2>{data.name}</h2>
      <a href={data.html_url}>{data.html_url}</a>
      <h3>Created:</h3>
      <p>{data.created_at}</p>
      <h3>Last push:</h3>
      <p>{data.pushed_at}</p>
      <h3>Forks:</h3>
      <p>{data.forks_count}</p>
      <h3>Visibility:</h3>
      <p>{data.visibility}</p>
      <h3>Languages:</h3>
      {languages.map((language) => (
        <div>
          <h4>{language.language}</h4>
          <p>{language.percent}%</p>
        </div>
      ))}
    </>
  );
};

export default RepoCard;
