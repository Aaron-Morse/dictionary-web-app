import styles from "./partofspeech.module.css";
import Synonym from "../synonym/Synonym";

export default function PartOfSpeech({ data }) {
  const { meanings } = data;
  console.log(data);

  return (
    <>
      {meanings.map((meaning, i) => (
        <section className={styles.container} key={i}>
          <h2 className={styles.title}>{meaning.partOfSpeech}</h2>
          <p className={styles.meaning}>Meaning</p>
          <ul>
            {meaning.definitions.map((def, i) => {
              if (i < 3) {
                return (
                  <li key={i} className={styles.definition}>
                    {def.definition}
                  </li>
                );
              }
            })}
          </ul>
          {meaning.partOfSpeech === "noun" && (
            <Synonym meaning={meaning} />
          )}
          {meaning.partOfSpeech === "verb" && (
            <p className={styles.sentence}>
              <q>{meaning.definitions[0].example}</q>
            </p>
          )}
        </section>
      ))}
    </>
  );
}
