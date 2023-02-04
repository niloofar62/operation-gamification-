import React from "react";
// function AverageScore({ data }) {
//   const averageScore =
//     data.reduce(
//       (sum, student) => sum + student.scores.reduce((s, score) => s + score, 0),
//       0
//     ) / data.reduce((count, student) => count + student.scores.length, 0);
//   return <div>{averageScore.toFixed(2)}</div>;
// }

function AverageScore({ data, goal }) {
  const averageScore =
    data.reduce(
      (sum, student) => sum + student.scores.reduce((s, score) => s + score, 0),
      0
    ) / data.reduce((count, student) => count + student.scores.length, 0);
  return (
    <div>
      {/* Actual: {averageScore.toFixed(2)} VS. Goal: {goal} */}
      <span style={{ color: averageScore * 10 >= goal ? "green" : "red" }}>
        Actual: {(averageScore * 10).toFixed(1)}%{" "}
      </span>
      VS. <span> Goal: {goal}% </span>
    </div>
  );
}
export default AverageScore;