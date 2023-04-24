import { useRef } from "react";
import styles from "./keyword.module.css";
import playIcon from "../../assets/images/icon-play.svg";

export default function Keyword({ data }) {
  const mp3s = data.phonetics.filter((item) => item.audio);

  const getAudioLink = () => {
    let audioLink = "";

    for (let mp3 of mp3s) {
      if (mp3.audio.includes("us.mp3")) audioLink = mp3.audio;
    }

    return audioLink || mp3s[0].audio;
  };

  const audioRef = useRef();

  return (
    <section className={styles.keywordContainer}>
      <div className={styles.keywordData}>
        <h1 className={styles.keyword}>{data?.word}</h1>
        <p className={styles.phonetic}>{data?.phonetic}</p>
      </div>
      {mp3s.length > 0 && (
        <>
          <audio ref={audioRef} src={getAudioLink()}></audio>
          <svg
            className={styles.playIcon}
            onClick={() => audioRef.current.play()}
            xmlns="http://www.w3.org/2000/svg"
            width="75"
            height="75"
            viewBox="0 0 75 75"
          >
            <g fill="#A445ED" fillRule="evenodd">
              <circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
              <path d="M29 27v21l21-10.5z" />
            </g>
          </svg>
        </>
      )}
    </section>
  );
}
