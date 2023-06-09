import styles from "./partofspeech.module.css";
import Synonym from "../synonym/Synonym";
import Sentence from "../sentence/Sentence";

export default function PartOfSpeech({ data }) {
  const { meanings } = data;
  const obj = {};
  for (const meaning of meanings) {
    if (!(meaning.partOfSpeech in obj)) {
      obj[meaning.partOfSpeech] = meaning;
    }
  }
  const distinctValues = Object.values(obj);

  return (
    <>
      {distinctValues.map((meaning, i) => (
        <section className={styles.container} key={i}>
          <h2 className={styles.title}>{meaning.partOfSpeech}</h2>
          <p className={styles.meaning}>Meaning</p>
          <ul>
            {meaning.definitions.map((def, i) => {
              if (i < (meaning.partOfSpeech === "noun" ? 3 : 1)) {
                return (
                  <li key={i} className={styles.definition}>
                    {def.definition}
                  </li>
                );
              }
            })}
          </ul>
          {meaning.synonyms.length > 0 && (
            <Synonym meaning={meaning} />
          )}
          {meaning.partOfSpeech === "verb" && (
            <Sentence meaning={meaning} />
          )}
        </section>
      ))}
    </>
  );
}
