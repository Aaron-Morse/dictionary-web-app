import { useRef } from "react";
import styles from "./main.module.css";
import playIcon from "../../assets/images/icon-play.svg";

export default function Main({ data }) {
  function getAudioLink() {
    const mp3 = data?.phonetics.filter((item) =>
      item.audio.includes("-us.mp3")
    )[0].audio;
    console.log(mp3);
    return mp3;
  }
  const audioRef = useRef();
  console.log(data);
  return (
    <main className={styles.main}>
      <section className={styles.keywordContainer}>
        <div className={styles.keywordData}>
          <h1 className={styles.keyword}>{data?.word}</h1>
          <p className={styles.phonetic}>{data?.phonetic}</p>
        </div>
        {data && (
          <>
            <audio ref={audioRef} src={getAudioLink()}></audio>
            <img
              onClick={() => audioRef.current.play()}
              className={styles.playIcon}
              src={playIcon}
              alt="Play keyword button"
            />
          </>
        )}
      </section>
    </main>
  );
}
