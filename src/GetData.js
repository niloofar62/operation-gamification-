import React from "react";
import App from "./App";
import axios from "axios";
import { useState, useEffect } from "react";

const API_KEY = "your_api_key";
const SPREADSHEET_ID = "1HPkB9M2r9xvsFSkj2JW4NWIt9Wu4R51o7GJ-UqVpT4E";

const API_URL =
  "https://sheets.googleapis.com/v4/spreadsheets/1HPkB9M2r9xvsFSkj2JW4NWIt9Wu4R51o7GJ-UqVpT4E/values/A1:Z1000?key=AIzaSyDyVz5IVWZi-9fa4zocg4ZcE1MXMn5WTfk";

export default function GetData() {
  const [data, setData] = useState({});

  const fetchData = async () => {
    const response = await fetch(
      "https://sheets.googleapis.com/v4/spreadsheets/1HPkB9M2r9xvsFSkj2JW4NWIt9Wu4R51o7GJ-UqVpT4E/values/A1:Z1000?key=AIzaSyDyVz5IVWZi-9fa4zocg4ZcE1MXMn5WTfk"
    );
    const json = await response.json();
    console.log(json);

    let reshapedData = {};
    for (const values of json.values) {
      let name = values[0];
      let scores = values.slice(1);
      if (!reshapedData[name]) {
        reshapedData[name] = [];
      }
      reshapedData[name].push(scores);
    }
    console.log("type is below");
    console.log(Object.prototype.toString.call(reshapedData));
    setData(reshapedData);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h2>Data</h2>
      <ul>
        {Object.keys(data).map((name) => (
          <li key={name}>
            Name: {name}, Scores: [
            {data[name].map((scores) => scores.join(", ")).join(",")}]
          </li>
        ))}
      </ul>
    </div>
  );
}

// export default function GetData() {
//   const [housekeeperData, setHousekeeperData] = useState([]);

//   useEffect(() => {
//     axios
//       .get(
//         `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/A1:Z1000?key=AIzaSyDyVz5IVWZi-9fa4zocg4ZcE1MXMn5WTfk`
//       )
//       .then((res) => {
//         const data = res.data.values;
//         setHousekeeperData(
//           data.map((item, index) => {
//             return {
//               id: index + 1,
//               name: item[0],
//               scores: item.slice(1).map((score) => parseInt(score)),
//             };
//           })
//         );
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   const formattedData = (housekeeperData) => {
//     let data = {};
//     for (let i = 0; i < housekeeperData.length; i++) {
//       let item = housekeeperData[i];
//       let name = item.Name;
//       let score = item.Score;
//       if (name in data) {
//         data[name].scores.push(score);
//       } else {
//         data[name] = { name, scores: [score] };
//       }
//     }
//     return Object.values(data);
//   };

//   return (
//     <div>
//       <h1>Data</h1>
//       <ul>
//         {formattedData.map((item) => (
//           <li key={item.id}>
//             Name: {item.name}, Scores: [{item.scores}]
//           </li>
//         ))}
//       </ul>
//     </div>
//   );

// }
