import PeopleList from "./components/PeopleList";
import Person from "./components/Person";
import { useState, useEffect } from "react";
import "./components/PeopleList.css";
import Admin from "./About";
import About from "./About";
import AverageScore from "./components/AverageScore";
import { Link, useLocation } from "react-router-dom";
import GameRules from "./components/GameRules";

const API_KEY = "AIzaSyDyVz5IVWZi-9fa4zocg4ZcE1MXMn5WTfk";
const SPREADSHEET_ID = "1HPkB9M2r9xvsFSkj2JW4NWIt9Wu4R51o7GJ-UqVpT4E";

const API_URL = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/A1:Z1000?key=${API_KEY}`;

function App() {
  const [data, setData] = useState([]);
  const [goal, setGoal] = useState();
  const [rules, setRules] = useState("");

  const fetchData = async () => {
    // const response = await fetch(API_URL);
    const response = await fetch(
      "https://sheets.googleapis.com/v4/spreadsheets/1HPkB9M2r9xvsFSkj2JW4NWIt9Wu4R51o7GJ-UqVpT4E/values/A1:Z1000?key=AIzaSyDyVz5IVWZi-9fa4zocg4ZcE1MXMn5WTfk"
    );
    const json = await response.json();
    let reshapedData = [];
    for (const values of json.values) {
      let name = values[0];
      let score = parseInt(values[1], 10);
      let found = reshapedData.find((person) => person.name === name);
      if (found) {
        found.scores.push(score);
      } else {
        reshapedData.push({ name, scores: [score] });
      }
    }
    setData(reshapedData);
  };
  function handleGoalChange(e) {
    setGoal(e.target.value);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const mainLocation = useLocation();
  const aboutLocation = useLocation();
  const adminLocation = useLocation();

  //   return (
  //     <div>
  //       {/* <NavBar />
  //       <h1>Game Rules</h1>
  //       <GameRules /> */}
  //       <nav>
  //         <Link to="/">
  //           <button>Home</button>
  //         </Link>
  //         <Link to="/about">
  //           <button>About</button>
  //         </Link>
  //         {aboutLocation.pathname === "/about" && <About />}
  //         {/* <Link to="/anotherpage">
  //           <button>AnotherPage</button>
  //         {/* </Link> */}
  //         {/* {location.pathname === "/anotherpage" && <AnotherPage />} */}
  //       </nav>
  //       <PeopleList data={data} />
  //       <h1> Top Score</h1>
  //       {/* <GetData /> */}
  //       <div className="top-five-box">
  //         <Person data={data} />
  //       </div>
  //       <h1>Sorted houskeeper</h1>
  //       {/* <AnotherPage data={data} /> */}
  //       <h1>AverageScore</h1>
  //       {/* <input type="number" value={goal} onChange={handleGoalChange} /> */}
  //       <input
  //         type="number"
  //         placeholder="Enter Goal Here..."
  //         // value={goal}
  //         // onChange={handleGoalChange}
  //       />
  //       {/* <AverageScore data={data} goal={goal} /> */}
  //     </div>
  //   );
  // }

  // export default App;
  return (
    <div>
      {/* <<<<<<< HEAD */}
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
      </nav>
      {aboutLocation.pathname === "/about" && <About />}
      {/* {adminLocation.pathname === "/admin" && <Admin />} */}
      {mainLocation.pathname === "/" && (
        <>
          <h1>Game Rules</h1>
          <GameRules />
          <h1>Queen of Housekeeping Challenge</h1>
          <PeopleList data={data} />
          <h1> Queen </h1>
          {/* <GetData /> */}
          <div className="top-five-box">
            <Person data={data} />
          </div>
          {/* <h1>Sorted houskeeper</h1>
          <AnotherPage data={data} /> */}
          <h1> AverageScore</h1>

          <input
            type="number"
            placeholder="Enter Goal Here..."
            value={goal}
            onChange={handleGoalChange}
          />
          <AverageScore data={data} goal={goal} />
        </>
      )}
    </div>
  );
}

export default App;
