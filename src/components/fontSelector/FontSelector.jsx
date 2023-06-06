import { useState } from "react";
import styles from "./fontSelector.module.css";
import arrowDownIcon from "../../assets/images/icon-arrow-down.svg";

export default function FontSelector({ font, setFont }) {
  const [showFontModal, setShowFontModal] = useState(false);

  const fontType = ["Sans Serif", "Serif", "Mono"];
  const fontName = ["inter", "lora", "inconsolata"];

  function FontModal() {
    return (
      <ul className={styles.modal}>
        {fontType.map((font, i) => (
          <li
            key={i}
            className={styles.modalItem}
            style={{ fontFamily: fontName[i] }}
            onClick={() => setFont(fontName[i])}
          >
            {font}
          </li>
        ))}
      </ul>
    );
  }

  function toggleModal() {
    setShowFontModal((prev) => !prev);
  }

  return (
    <div className={styles.container}>
      <div onClick={toggleModal}>
        <span className={styles.fontType}>
          {fontType[fontName.indexOf(font)]}
        </span>
        <img src={arrowDownIcon} alt="Down arrow icon" />
      </div>
      {showFontModal && <FontModal />}
    </div>
  );
}
