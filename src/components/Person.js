import React from "react";
import "../App.css";

function Person({ data }) {
  // Sort the data array by average score
  const sortedData = data.sort((a, b) => {
    const aAvg = a.scores.reduce((acc, curr) => acc + curr) / a.scores.length;
    const bAvg = b.scores.reduce((acc, curr) => acc + curr) / b.scores.length;
    return bAvg - aAvg;
  });

  // Get the top 5 people
  const topFive = sortedData.slice(0, 5);

  const top = topFive.map((person) => (
    <div key={person.id}>
      {/* <img src={"path/to/crown.jpg"} alt={`${person.name}'s crown`} /> */}
      <p>{person.name}</p>
    </div>
  ));

  return <div>{top}</div>;
}

export default Person;
