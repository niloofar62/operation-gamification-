import PeopleList from "./components/PeopleList";
import Person from "./components/Person";
import { useState, useEffect } from "react";
import "./components/PeopleList.css";
import Display from "./Display";
import AverageScore from "./components/AverageScore";
import { Link, Route, useLocation } from "react-router-dom";
import GameRules from "./components/GameRules";
import AnotherPage from "./components/AnotherPage";
import LoginForm from "./components/LoginForm";
import Form from "./components/Form";

const API_KEY = "AIzaSyDyVz5IVWZi-9fa4zocg4ZcE1MXMn5WTfk";
const SPREADSHEET_ID = "1HPkB9M2r9xvsFSkj2JW4NWIt9Wu4R51o7GJ-UqVpT4E";

const API_URL = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/A1:Z1000?key=${API_KEY}`;
const rules1 =
  "Earn jewels to fill your crown! Each survey with a 9-10 Room Cleanliness = 1 jewel, 5 jewels = $25. Whoever has the most jewels at the end of each month will be named,THE QUEEN OF HouseKEEPING,And will win an additional $50!";

function App() {
  const [data, setData] = useState([]);
  const [goal, setGoal] = useState();
  const [rules, setRules] = useState(rules1);

  // state variables for name and score
  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  const fetchData = async () => {
    // const response = await fetch(API_URL);
    const response = await fetch(
      // "https://sheets.googleapis.com/v4/spreadsheets/1HPkB9M2r9xvsFSkj2JW4NWIt9Wu4R51o7GJ-UqVpT4E/values/A1:Z1000?key=AIzaSyDyVz5IVWZi-9fa4zocg4ZcE1MXMn5WTfk"
      "https://sheets.googleapis.com/v4/spreadsheets/1vXpLAfPutTivi97Wu3PzJB5ZManHGttirB9by_a_Aw8/values/B2:Z1000?key=AIzaSyDyVz5IVWZi-9fa4zocg4ZcE1MXMn5WTfk"
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

  const displayLocation = useLocation();
  const adminLocation = useLocation();
  const loginLocation = useLocation();

  const handleSubmit = (newValue) => {
    setRules(newValue);
  };

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <div>
      <nav>
        <Link to="/">
          <button>Admin</button>
        </Link>
        <Link to="/display">
          <button>Display</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </nav>
      {loginLocation.pathname === "/login" && (
        <>
          {isAuthenticated ? (
            <p>Welcome! You are logged in.</p>
          ) : (
            <LoginForm onLogin={handleLogin} location="login" />
          )}
        </>
      )}

      {displayLocation.pathname === "/display" && (
        <>
          <h1>Queen of Housekeeping Challenge</h1>
          <PeopleList data={data} />
          <h1>Game Rules</h1>
          <Display rules={rules} location="display" />
          <h1> Queen </h1>
          <div className="top-five-box">
            <Person data={data} />
          </div>
          <AverageScore data={data} goal={goal} />
        </>
      )}
      {adminLocation.pathname === "/" && (
        <div>
          <h1>Queen of Housekeeping Challenge</h1>
          <h4>Input Team Goal for Cleanliness Score:</h4>
          <input
            type="number"
            placeholder="Enter Goal Here..."
            value={goal}
            onChange={handleGoalChange}
          />
          <AverageScore data={data} goal={goal} />
          <h4>Input Housekeeper Scores:</h4>
          <Form />
          <h4>Housekeepers Average Cleanliness Scores:</h4>
          <AnotherPage data={data} />
          <h4>Update Game Rules:</h4>
          <GameRules
            onSubmit={handleSubmit}
            rules_data={rules}
            location="admin"
          />
        </div>
      )}
    </div>
  );
}

export default App;
