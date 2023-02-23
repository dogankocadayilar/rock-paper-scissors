import styles from "./RulesModal.module.css";

function RulesModal({ onClose }) {
  return (
    <div className={styles.modal}>
      <div className={styles.wrapper}>
        <h2 className={styles.modal_title}>Rules</h2>
        <img
          src="./src/assets/images/image-rules.svg"
          alt="Rules"
          className={styles.rules}
        />
        <button className={styles.button} onClick={onClose}>
          <img
            src="./src/assets/images/icon-close.svg"
            alt="Close"
            className={styles.close}
          />
        </button>
      </div>
    </div>
  );
}

export default RulesModal;
