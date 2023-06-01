import styles from "./synonym.module.css";

export default function Synonym({ meaning }) {
  const [synonym] = meaning.synonyms;

  return (
    <p className={styles.container}>
      Synonyms <span className={styles.synonym}>{synonym}</span>
    </p>
  );
}
