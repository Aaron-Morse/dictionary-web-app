import styles from "./sentence.module.css";

export default function Sentence({ meaning }) {
  const { definitions } = meaning;
  const [definition] = definitions;
  return (
    <>
      {definition.example && (
        <p className={styles.sentence}>
          <q>{definition.example}</q>
        </p>
      )}
    </>
  );
}
