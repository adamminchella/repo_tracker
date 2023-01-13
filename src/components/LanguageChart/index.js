import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

// const LanguageChart = ({ languages }) => {

//   const [languageData, setLanguageData] = useState({})
//   console.log(languages)
//   console.log(languages.length)
//   if (languages.length !== 0) {

//     setLanguageData ({
//     labels: languages.map((data) => data.language),
//     datasets: [
//       {
//         label: "Users Gained ",
//         data: languages.map((data) => data.percent),
//         backgroundColor: [
//           "rgba(75,192,192,1)",
//           "#ecf0f1",
//           "#50AF95",
//           "#f3ba2f",
//           "#2a71d0"
//         ],
//         borderColor: "black",
//         borderWidth: 2
//       }
//     ]
//   })
//   }
//   else {
//     console.log("No languages")
//   }

const LanguageChart = ({ languages }) => {
  const [showChart, setShowChart] = useState(false);

  const renderChart = () => {
    const data = {
      labels: languages.map((data) => data.language),
      datasets: [
        {
          label: "Percentage ",
          data: languages.map((data) => data.percent),
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderWidth: 0,
        },
      ],
    };

    return <Doughnut data={data} />;
  };

  const toggleShowChart = () => {
    setShowChart(!showChart);
  };

  // Retuning the data
  return (
    <div className="card" id="language">
      {/* {languages.map((language) => (
        <>
          <h4>{language.language}</h4>
          <p>{language.percent}%</p>
        </>
      ))} */}
      <div>
        {languages.length == 0 ? (
          <p>No languages</p>
        ) : (
          <button type="button" onClick={toggleShowChart}>
            Show chart
          </button>
        )}
      </div>
      {showChart ? renderChart() : <p></p>}
    </div>
  );
};

export default LanguageChart;
