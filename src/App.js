import "./App.css";
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer";
import LeaderBoard from "./components/LeaderBoard";
import Crown from "./components/Crown";

function App() {
  return (
    <div className="App">
      <NavBar />
      <LeaderBoard />
      <Crown />
      <Footer />
    </div>
  );
}

export default App;
