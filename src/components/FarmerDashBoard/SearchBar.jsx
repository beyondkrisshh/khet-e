import React from 'react';
import styles from './SearchBar.module.css';

function SearchBar() {
  return (
    <form className={styles.searchBar} role="search">
      <label htmlFor="search" className={styles.visuallyHidden}>Search</label>
      <input type="search" id="search" className={styles.searchInput} placeholder="Search" />
      <button type="submit" className={styles.searchButton}>
        <img src="http://b.io/ext_23-" alt="Search" className={styles.searchIcon} />
      </button>
    </form>
  );
}

export default SearchBar;