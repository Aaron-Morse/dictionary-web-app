import styles from "./synonym.module.css";

export default function Synonym({ meaning }) {
  const synonyms = meaning.synonyms.slice(0, 3).join(", ");

  return (
    <p className={styles.container}>
      Synonyms <span className={styles.synonym}>{synonyms}</span>
    </p>
  );
}
