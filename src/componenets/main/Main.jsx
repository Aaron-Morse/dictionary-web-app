import styles from "./main.module.css";
import Keyword from "../keyword/Keyword";
import PartOfSpeech from "../partOfSpeech/PartOfSpeech";

export default function Main({ data }) {
  return (
    <main className={styles.container}>
      {data && (
        <>
          <Keyword data={data} />
          <PartOfSpeech data={data} />
        </>
      )}
    </main>
  );
}
