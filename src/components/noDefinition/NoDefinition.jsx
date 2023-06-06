import styles from "./nodefinition.module.css";

export default function NoDefinition() {
  return (
    <section className={styles.container}>
      <p className={styles.emoji}>😕</p>
      <h2 className={styles.title}>No Definitions Found</h2>
      <p className={styles.content}>
        Sorry pal, we couldn't find definitions for the word you were
        looking for. You can try the search again at later time or
        head to the web instead.
      </p>
    </section>
  );
}
