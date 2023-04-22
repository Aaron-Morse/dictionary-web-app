import styles from "./footer.module.css";
import newWindowIcon from "../../assets/images/icon-new-window.svg";

export default function Footer({ data }) {
  return (
    <>
      {data && (
        <footer className={styles.container}>
          <p className={styles.title}>Source</p>
          <p>
            <span className={styles.sourceUrl}>
              {data.sourceUrls[0]}
            </span>
            <img src={newWindowIcon} />
          </p>
        </footer>
      )}
    </>
  );
}
