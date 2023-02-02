import React from "react";

import "../App.css";

function AnotherPage({ data }) {
  // Sort the data array by average score
  const sortedData = data.sort((a, b) => {
    const aAvg = a.scores.reduce((acc, curr) => acc + curr) / a.scores.length;
    const bAvg = b.scores.reduce((acc, curr) => acc + curr) / b.scores.length;
    return bAvg - aAvg;
  });

  // const top = sortedData.map((person) => (
  //   <div key={person.id}>
  //     {/* <img src={"path/to/crown.jpg"} alt={`${person.name}'s crown`} /> */}
  //     <p>{person.name}</p>
  //   </div>
  // ));
  const top = sortedData.map((person) => {
    const avg =
      person.scores.reduce((acc, curr) => acc + curr) / person.scores.length;
    return (
      <div key={person.id}>
        <p>Name: {person.name}</p>
        <p>Average Score: {avg.toFixed(2)}</p>
      </div>
    );
  });

  return <div>{top}</div>;
}

export default AnotherPage;
