import { createContext, useEffect, useState } from "react";
import ChoicePhase from "./components/ChoicePhase";
import Header from "./components/Header";
import "./App.css";
import ResultPhase from "./components/ResultPhase";

export const choices = {
  paper: "rock",
  scissors: "paper",
  rock: "scissors",
};

export const choiceContext = createContext(null);

function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [score, setScore] = useState(0);

  return (
    <div className="app">
      <Header score={score} />
      <choiceContext.Provider
        value={{
          player: [playerChoice, setPlayerChoice],
          computer: [computerChoice, setComputerChoice],
          setScore,
        }}
      >
        {!playerChoice && <ChoicePhase />}
        {playerChoice && <ResultPhase />}
      </choiceContext.Provider>
    </div>
  );
}

export default App;
