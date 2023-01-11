import React from "react";
import "./styles.css"

const RepoCard = ({ data }) => {

  const date = new Date(data.pushed_at).toDateString()
  console.log(date)
  
  return (
    <div className="all-cards">
      <span className="header">
        <div className="card" id="name">
          <h2>{data.name}</h2>
        </div>
        <div className="card" id="visibility">
          <p>{data.visibility.charAt(0).toUpperCase() + data.visibility.slice(1)}</p> 
        </div>
      </span>
      <div className="card" id="link">
        <a href={data.html_url}>{data.html_url}</a>
      </div>
      <div className="card" id="created">
        <h3>Created:</h3>
        <p>{data.created_at}</p>
      </div>


      <div className="card" id="last-push">
        <h3>Updated</h3>
        <p>{date}</p>
      </div>


      <div className="card" id="fork">
        <h3>Forks:</h3>
        <p>{data.forks_count}</p>
      </div>
    </div>
  );
};

export default RepoCard;
