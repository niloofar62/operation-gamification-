import React from "react";

import "../App.css";

function AnotherPage({ data, goal }) {
  // Sort the data array by average score
  const sortedData = data.sort((a, b) => {
    const aAvg = a.scores.reduce((acc, curr) => acc + curr) / a.scores.length;
    const bAvg = b.scores.reduce((acc, curr) => acc + curr) / b.scores.length;
    return bAvg - aAvg;
  });

  const top = sortedData.map((person) => {
    const avg =
      person.scores.reduce((acc, curr) => acc + curr) / person.scores.length;
    return (
      <div key={person.id}>
        <p>
          <span style={{ color: avg * 10 >= goal ? "green" : "red" }}>
            {person.name} {avg.toFixed(2) * 10}%
          </span>
        </p>
      </div>
    );
  });

  return <div>{top}</div>;
}

export default AnotherPage;
