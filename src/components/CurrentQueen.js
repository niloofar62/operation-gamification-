import React from "react";
import "../App.css";

function CurrentQueen({ data }) {
  // Sort the data array by average score
  const sortedData = data.sort((a, b) => {
    const aAvg = a.scores.reduce((acc, curr) => acc + curr) / a.scores.length;
    const bAvg = b.scores.reduce((acc, curr) => acc + curr) / b.scores.length;
    return bAvg - aAvg;
  });

  // Get 1st place
  const topFive = sortedData.slice(0, 1);

  const top = topFive.map((person) => (
    <div key={person.id}>
      <p> 🏰 Queen {person.name} 🏰</p>
    </div>
  ));

  return <div>{top}</div>;
}

export default CurrentQueen;
