import React from "react";

const LanguageChart = ({ languages }) => {
  return (
    <div className="card" id="language">
      {languages.map((language) => (
        <>
          <h4>{language.language}</h4>
          <p>{language.percent}%</p>
        </>
      ))}
    </div>
  );
};

export default LanguageChart;
