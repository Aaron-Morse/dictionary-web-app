import styles from "./partofspeech.module.css";

export default function PartOfSpeech({ data, type }) {
  console.log(data);

  return (
    <section>
      <h2 className={styles.title}>{type}</h2>
      <p className={styles.meaning}>Meaning</p>
      {data.meanings
        .filter((meaning) => meaning.partOfSpeech === type)[0]
        .definitions.map((item, i) => (
          <p key={i} className={styles.definition}>
            {item.definition}
          </p>
        ))}
    </section>
  );
}
