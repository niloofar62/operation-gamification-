import React from "react";

function AverageScore({ data, goal }) {
  const averageScore =
    data.reduce(
      (sum, housekeeper) =>
        sum + housekeeper.scores.reduce((s, score) => s + score, 0),
      0
    ) /
    data.reduce((count, housekeeper) => count + housekeeper.scores.length, 0);
  return (
    <div>
      <span
        style={{
          color: averageScore * 10 >= goal ? "green" : "red",
        }}
      >
        Actual: {(averageScore * 10).toFixed(1)}%{" "}
      </span>
      VS. <span> Goal: {goal}% </span>
    </div>
  );
}
export default AverageScore;
