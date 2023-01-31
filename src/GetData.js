import React from "react";
import App from "./App";
import axios from "axios";
import { useState, useEffect } from "react";

const API_KEY = "your_api_key";
const SPREADSHEET_ID = "1HPkB9M2r9xvsFSkj2JW4NWIt9Wu4R51o7GJ-UqVpT4E";

export default function GetData() {
  const [housekeeperData, setHousekeeperData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/A1:Z1000?key=AIzaSyDyVz5IVWZi-9fa4zocg4ZcE1MXMn5WTfk`
      )
      .then((res) => {
        const data = res.data.values;
        setHousekeeperData(
          data.map((item, index) => {
            return {
              id: index + 1,
              name: item[0],
              scores: item.slice(1).map((score) => parseInt(score)),
            };
          })
        );
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <section>{housekeeperData}</section>
    </div>
  );
}
