import styles from "./header.module.css";
import logoIcon from "../../assets/images/logo.svg";
import FontSelector from "../fontSelector/FontSelector";
import ThemeSelector from "../themeSelector/ThemeSelector";

export default function Header({
  font,
  setFont,
  darkMode,
  setDarkMode,
}) {
  return (
    <header className={styles.container}>
      <img
        src={logoIcon}
        className={styles.logo}
        alt="Dictionary app logo"
      />
      <FontSelector font={font} setFont={setFont} />
      <ThemeSelector darkMode={darkMode} setDarkMode={setDarkMode} />
    </header>
  );
}
