import { choices } from "../App";
import Choice from "./Choice";
import styles from "./ChoicePhase.module.css";

function ChoicePhase() {
  return (
    <main className={styles.main}>
      {Object.keys(choices).map((choice, idx) => (
        <Choice key={idx} choiceName={choice} />
      ))}
    </main>
  );
}

export default ChoicePhase;
