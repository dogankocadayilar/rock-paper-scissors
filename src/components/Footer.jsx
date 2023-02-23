import { useState } from "react";
import styles from "./Footer.module.css";
import RulesModal from "./RulesModal";

function Footer() {
  const [showModal, setShowModal] = useState(false);

  return (
    <footer className={styles.footer}>
      {!showModal && (
        <button className={styles.button} onClick={() => setShowModal(true)}>
          Rules
        </button>
      )}
      {showModal && <RulesModal onClose={() => setShowModal(false)} />}
    </footer>
  );
}

export default Footer;
