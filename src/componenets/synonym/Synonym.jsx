import styles from "./synonym.module.css";

export default function Synonym({ data }) {
  const synonyms = data.meanings[0].synonyms[0];

  return (
    <>
      {synonyms && (
        <p className={styles.container}>
          Synonyms{" "}
          <span className={styles.synonym}>
            {data.meanings[0].synonyms[0]}
          </span>
        </p>
      )}
    </>
  );
}
