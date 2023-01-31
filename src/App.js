import React from "react";
import PeopleList from "./components/PeopleList";
import Person from "./components/Person";
import { useState } from "react";
import "./App.css";
// const data = [
//   { id: 1, name: "John", scores: [9, 8, 10] },
//   { id: 2, name: "Jane", scores: [7, 9, 8] },
//   { id: 3, name: "Bob", scores: [6, 8, 9] },
// ];

function App() {
  const [data, setData] = useState([
    { id: 1, name: "John", scores: [9, 8, 7, 6, 10] },
    { id: 2, name: "Mary", scores: [7, 8, 9, 10, 8] },
    { id: 3, name: "Jane", scores: [8, 8, 8, 8, 8] },
    {
      id: 4,
      name: "Mike",
      scores: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    },
    { id: 5, name: "Emily", scores: [6, 7, 8, 9, 10] },
  ]);
  return (
    <div>
      <PeopleList data={data} />
      <h1> Five Top Score</h1>
      <div className="top-five-box">
        <Person data={data} />
      </div>
    </div>
  );
}

export default App;

// import React from "react";
// import NavBar from "./components/NavBar";
// import LeaderBoard from "./components/LeaderBoard";
// import Crown from "./components/Crown";
// import Footer from "./components/Footer";

// const housekeeperData = [
//   { id: 1, name: "Peli", scores: [5, 7, 2, 9, 9, 10, 4, 8] },
//   { id: 2, name: "Ada", scores: [7, 8, 9, 10, 5, 7, 2, 1, 0] },
//   { id: 3, name: "Lily", scores: [3, 7, 9, 6, 9, 4, 10, 8] },
// ];

// // function averages(name, scores) {
// //   const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
// //   console.log(avg);
// // }

// // function getAverages() {
// //   for (let i = 0; i < housekeeperData.length; i++) {
// //     let total = housekeeperData[i].scores.reduce((acc, c) => acc + c, 0);
// //     let averageScore = total / housekeeperData[i].scores.length;
// //     console.log(averageScore);
// //   }
// // }

// // function getAverages() {
// //   for (let i = 0; i < housekeeperData.length; i++) {
// //     let total = housekeeperData[i].scores.reduce((acc, c) => acc + c, 0);
// //     let averageScore = total / housekeeperData[i].scores.length;
// //     // console.log(averageScore)
// //     housekeeperData[i].scores = averageScore;
// //   }
// //   console.log(housekeeperData);
// // }

// function App() {
//   const nameElements = housekeeperData.map((name) => {
//     return <Crown housekeeperName={name.name} />;
//   });

//   function getAverages(housekeeperData) {
//     return housekeeperData.map((item) => {
//       const sum = item.scores.reduce((acc, cur) => acc + cur, 0);
//       const average = sum / item.scores.length;
//       return { ...item, average: average };
//     });
//   }

//   const updatedData = getAverages(housekeeperData);
//   console.log(updatedData);
//   const rankedList = updatedData.sort((a, b) => b.average - a.average);

//   // get max average and max average name
//   const maxAverage = rankedList[0].average;
//   const maxAverageName = rankedList[0].name;

//   // this returns all averages
//   // const averageElements = updatedData.map((item) => {
//   //   return <LeaderBoard name={item.name} average={item.average} />;
//   // });

//   return (
//     <div>
//       <NavBar />
//       <LeaderBoard name={maxAverageName} average={maxAverage} />
//       <section>{nameElements}</section>
//       <Footer />
//     </div>
//   );
// }

// export default App;
