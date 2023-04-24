import { useState, useEffect } from "react";
import styles from "./search.module.css";
import searchIcon from "../../assets/images/icon-search.svg";

export default function Search({ setData }) {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);

  async function fetchData(e) {
    e.preventDefault();
    if (!query) {
      setError(true);
      return;
    }

    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`
      );
      const json = await response.json();
      const [data] = json;
      setData(data);
    } catch (err) {
      console.log("error", err);
    }
  }

  return (
    <>
      <form
        onSubmit={fetchData}
        onFocus={(e) => e.target.select()}
        className={
          error ? `${styles.form} ${styles.error}` : `${styles.form}`
        }
      >
        <input
          type="text"
          placeholder="Search for any word..."
          className={styles.searchInput}
          value={query}
          onChange={(e) => {
            setError(false);
            setQuery(e.target.value);
          }}
        />
        <button className={styles.searchBtn}>
          <img src={searchIcon} />
        </button>
      </form>
      {error && (
        <p className={styles.errorMsg}>Whoops, can't be empty...</p>
      )}
    </>
  );
}
