import styles from "./synonym.module.css";

export default function Synonym({ meaning }) {
  const synonyms = meaning.synonyms;

  return (
    <p className={styles.container}>
      Synonyms{" "}
      <span className={styles.synonym}>
        {synonyms.slice(0, 3).join(", ")}
      </span>
    </p>
  );
}
