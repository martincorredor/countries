'use client';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './SearchFilter.module.css';

const SearchFilter = ({ countries, setFiltered }) => {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearch(query);
    setFiltered(
      countries.filter((c) => c.name.common.toLowerCase().includes(query))
    );
  };

  const handleRegion = (e) => {
    const region = e.target.value;
    setFiltered(
      region === '' ? countries : countries.filter((c) => c.region === region)
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchWrapper}>
        <FontAwesomeIcon icon={faSearch} className={styles.icon} />
        <input
          className={styles.search}
          type="text"
          placeholder="Search for a country..."
          value={search}
          onChange={handleSearch}
          maxLength={30}
        />
      </div>
      
      <select className={styles.filter} onChange={handleRegion}>
        <option className={styles.filterOption} value="">Filter by Region</option>
        <option className={styles.filterOption} value="Africa">Africa</option>
        <option className={styles.filterOption} value="Americas">America</option>
        <option className={styles.filterOption} value="Asia">Asia</option>
        <option className={styles.filterOption} value="Europe">Europe</option>
        <option className={styles.filterOption} value="Oceania">Oceania</option>
      </select>
    </div>
  );
}


export default SearchFilter;