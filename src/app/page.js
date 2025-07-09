"use client";
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import SearchFilter from './components/SearchFilter/SearchFilter';
import CountryCard from './components/CountryCard/CountryCard';
import styles from './page.module.css';


export default function Home() {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const URL = "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,cca3"

  useEffect(() => {
    axios.get(URL)
      .then(response => {
        setCountries(response.data);
        setFiltered(response.data);
      })
      .catch(error => {
        console.log('Error fetching countries:', error);
      });
  }, []);


  return (
    <main>
      <Header/>
      <SearchFilter countries={countries} setFiltered={setFiltered} />
      <section className={styles.countryList}>
        {filtered.map((country, index) => (
          <CountryCard key={index} country={country} />
        ))}
      </section>
    </main>
  );
}
