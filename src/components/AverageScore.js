import React from "react";
function AverageScore({ data }) {
  const averageScore =
    data.reduce(
      (sum, student) => sum + student.scores.reduce((s, score) => s + score, 0),
      0
    ) / data.reduce((count, student) => count + student.scores.length, 0);
  return <div>{averageScore.toFixed(2)}</div>;
}

export default AverageScore;
