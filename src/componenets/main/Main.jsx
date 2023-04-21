import styles from "./main.module.css";
import Keyword from "../keyword/Keyword";
import Noun from "../noun/Noun";

export default function Main({ data }) {
  console.log(data);
  return (
    <main className={styles.container}>
      <Keyword data={data} />
      <Noun data={data} />
    </main>
  );
}
