import { useContext, useEffect, useState } from "react";
import { choiceContext, choices } from "../App";
import Choice from "./Choice";
import styles from "./ResultPhase.module.css";

Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};

function decideResult(playerChoice, computerChoice) {
  return choices[playerChoice] === computerChoice
    ? "you win"
    : playerChoice === computerChoice
    ? "draw"
    : "you lose";
}

function ResultPhase() {
  const [result, setResult] = useState(null);
  const { player, computer, setScore } = useContext(choiceContext);
  const [playerChoice, setPlayerChoice] = player;
  const [computerChoice, setComputerChoice] = computer;

  useEffect(() => {
    setTimeout(() => {
      setComputerChoice(Object.keys(choices).random());
    }, 1000);
  }, [playerChoice]);

  useEffect(() => {
    if (computerChoice) {
      setResult(decideResult(playerChoice, computerChoice));
    }
  }, [computerChoice]);

  useEffect(() => {
    if (result) {
      setScore((prevScore) => {
        if (result === "you win") return prevScore + 1;
        else if (result === "you lose") return prevScore - 1;
        else return prevScore;
      });
    }
  }, [result]);

  function playAgain() {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
  }

  return (
    <main className={styles.main}>
      <div className={styles.column}>
        <Choice choiceName={playerChoice} />
        <span className={styles.label}>You Picked</span>
      </div>
      <div className={styles.column}>
        {computerChoice && <Choice choiceName={computerChoice} />}
        {!computerChoice && <div className={styles.blank_choice}></div>}
        <span className={styles.label}>The House Picked</span>
      </div>
      {result && (
        <div className={styles.row}>
          <div className={styles.result}>{result}</div>
          <button onClick={playAgain} className={styles.button}>
            play again
          </button>
        </div>
      )}
    </main>
  );
}

export default ResultPhase;
