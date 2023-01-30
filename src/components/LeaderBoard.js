import React from "react";
//import { useState } from "react";

//const housekeeperData = [
  //{ id: 1, name: "Peli", scores: [5, 7, 2, 9, 9, 10, 4, 8] },
 // { id: 2, name: "Ada", scores: [7, 8, 9, 10, 5, 7, 2, 1, 0] },
  //{ id: 3, name: "Lily", scores: [3, 7, 9, 6, 9, 4, 10, 8] },];

// function getAverages() {
//   for (let i = 0; i < housekeeperData.length; i++) {
//     let total = housekeeperData[i].scores.reduce((acc, c) => acc + c, 0);
//     let averageScore = total / housekeeperData[i].scores.length;
//     // console.log(averageScore)
//     housekeeperData[i].scores = averageScore;
//   }
//   console.log(housekeeperData);
// }


function LeaderBoard(props) {
  return (
    <div>
      <h1 className="leader-board-title">
        1st Place Housekeeper Name Here: {props.name}
      </h1>
      <h6>{props.average}</h6>
    </div>
  );
}

export default LeaderBoard;

//function LeaderBoard() {
  //const [maxAverage, setMaxAverage] = useState(0);
  let maxAvg = 0;
  //housekeeperData.forEach((name) => {
    //const avg =
      //name.scores.reduce((acc, curr) => acc + curr) / name.scores.length;
    //if (avg > maxAvg) {
      //maxAvg = avg;}});

  //setMaxAverage(maxAvg);
  //return (
    //<div>
      //<h1 className="leader-board-title">{maxAverage}</h1>
