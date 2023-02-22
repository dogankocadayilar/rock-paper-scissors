import { useContext } from "react";
import { choiceContext } from "../App";
import styles from "./Choice.module.css";

function Choice({ choiceName }) {
  const { player } = useContext(choiceContext);
  const [_, setPlayerChoice] = player;

  return (
    <div
      className={`${styles.choice} ${styles[choiceName]}`}
      onClick={() => setPlayerChoice(choiceName)}
    >
      <img
        src={`./src/assets/images/icon-${choiceName}.svg`}
        alt={choiceName}
      />
    </div>
  );
}

export default Choice;
