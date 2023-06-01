import { useRef } from "react";
import styles from "./keyword.module.css";
import playIcon from "../../assets/images/icon-play.svg";

export default function Keyword({ data }) {
  console.log(data);
  const audioRef = useRef();
  const phonetics = data.phonetics;

  const getAudioLink = () => {
    const links = phonetics.filter((item) => item.audio);
    return links[links.length - 1]?.audio;
  };

  return (
    <section className={styles.keywordContainer}>
      <div className={styles.keywordData}>
        <h1 className={styles.keyword}>{data?.word}</h1>
        <p className={styles.phonetic}>
          {phonetics.text || phonetics[phonetics.length - 1].text}
        </p>
      </div>
      {getAudioLink() !== undefined && (
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
