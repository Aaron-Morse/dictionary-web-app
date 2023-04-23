import styles from "./footer.module.css";
import newWindowIcon from "../../assets/images/icon-new-window.svg";

export default function Footer({ data }) {
  const url = data?.sourceUrls[0];
  return (
    <>
      {data && (
        <footer className={styles.container}>
          <p className={styles.title}>Source</p>
          <a href={url} target="_blank">
            <span className={styles.sourceUrl}>{url}</span>
            <img src={newWindowIcon} />
          </a>
        </footer>
      )}
    </>
  );
}
