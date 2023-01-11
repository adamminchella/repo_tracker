import React from "react";

const RepoCard = ({ data }) => {
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
    </>
  );
};

export default RepoCard;
