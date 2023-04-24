import { useState, useEffect } from "react";
import styles from "./search.module.css";
import searchIcon from "../../assets/images/icon-search.svg";

export default function Search({ setData }) {
  const [query, setQuery] = useState("");

  async function fetchData(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`
      );
      const data = await response.json();
      setData(data[0]);
    } catch (err) {
      console.log("error", err);
    }
  }

  return (
    <form
      onSubmit={fetchData}
      onFocus={(e) => e.target.select()}
      className={styles.form}
    >
      <input
        type="text"
        placeholder="Search for any word..."
        className={styles.searchInput}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className={styles.searchBtn}>
        <img src={searchIcon} />
      </button>
    </form>
  );
}
