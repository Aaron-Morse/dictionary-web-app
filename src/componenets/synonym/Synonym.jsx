import styles from "./synonym.module.css";

export default function Synonym({ meaning }) {
  const [synonyms] = meaning.synonyms;

  return (
    <>
      {synonyms && (
        <p className={styles.container}>
          Synonyms <span className={styles.synonym}>{synonyms}</span>
        </p>
      )}
    </>
  );
}
