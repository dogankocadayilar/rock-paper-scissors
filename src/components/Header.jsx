import styles from "./Header.module.css";

function Header({ score }) {
  return (
    <header className={styles.header}>
      <img
        src="https://raw.githubusercontent.com/dogankocadayilar/rock-paper-scissors/main/src/assets/images/logo.svg"
        alt="Logo"
        className={styles.logo}
      />
      <div className={styles.score_container}>
        <span className={styles.score_title}>Score</span>
        <span className={styles.score}>{score}</span>
      </div>
    </header>
  );
}

export default Header;
