import styles from "./themeselector.module.css";
import moonIcon from "../../assets/images/icon-moon.svg";

export default function ThemeSelector({ darkMode, setDarkMode }) {
  function toggleDarkMode(e) {
    setDarkMode((prev) => !prev);
  }

  return (
    <div className={styles.container}>
      <div
        className={styles.toggleContainer}
        onClick={toggleDarkMode}
      >
        <div
          className={styles.toggleBtn}
          style={darkMode ? { right: "8%" } : { left: "8%" }}
        ></div>
      </div>
      <img src={moonIcon} alt="Theme selector icon" />
    </div>
  );
}
