import React from "react";
import NavBar from "./components/NavBar";
import LeaderBoard from "./components/LeaderBoard";
import Crown from "./components/Crown";
import Footer from "./components/Footer";

const housekeeperData = [
  { id: 1, name: "Peli", scores: [5, 7, 2, 9, 9, 10, 4, 8] },
  { id: 2, name: "Ada", scores: [7, 8, 9, 10, 5, 7, 2, 1, 0] },
  { id: 3, name: "Lily", scores: [3, 7, 9, 6, 9, 4, 10, 8] },
];

function App() {
  const nameElements = housekeeperData.map((name) => {
    return <Crown housekeeperName={name.name} />;
  });
  return (
    <div>
      <NavBar />
      <LeaderBoard />
      <p>{nameElements}</p>
      <Footer />
    </div>
  );
}

export default App;
