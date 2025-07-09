import axios from 'axios';
import Link from 'next/link';
import Header from '../components/Header/Header';
import styles from './page.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default async function CountryDetail({ params }) {
  const countryName = decodeURIComponent(params.country);

  const res = await axios.get(
    `https://restcountries.com/v3.1/name/${countryName}?fullText=true&fields=name,flags,population,region,subregion,capital,tld,currencies,languages,borders`
  );
  const country = res.data[0];

  let borderCountries = [];
  if (country.borders && country.borders.length > 0) {
    const codes = country.borders.join(',');
    const bordersRes = await axios.get(
      `https://restcountries.com/v3.1/alpha?codes=${codes}&fields=name,cca3`
    );
    borderCountries = bordersRes.data.map((c) => c.name.common);
  }

  return (
    <div>
      <Header />
      <div className={styles.pageContent}>
        <Link href="/" className={styles.goBack}>
          <FontAwesomeIcon icon={faArrowLeft} className={styles.icon} />
          <span style={{ marginLeft: '8px' }}>Back</span>
        </Link>

        <div className={styles.countryDetailsContainer}>
          <img
            className={styles.countryFlag}
            src={country.flags.png}
            alt={`${country.name.common} flag`}
          />
          <div className={styles.countryInfo}>
            <h2 className={styles.countryName}>{country.name.common}</h2>
            <div className={styles.countryDetails}>
              <div className={styles.countryDetailsLeft}>
                <p>
                  <strong>Native Name:</strong>{' '}
                  {Object.values(country.name.nativeName || {})[0]?.common}
                </p>
                <p>
                  <strong>Population:</strong>{' '}
                  {country.population.toLocaleString()}
                </p>
                <p>
                  <strong>Region:</strong> {country.region}
                </p>
                <p>
                  <strong>Sub Region:</strong> {country.subregion}
                </p>
                <p>
                  <strong>Capital:</strong> {country.capital?.[0]}
                </p>
              </div>
              <div className={styles.countryDetailsRight}>
                <p>
                  <strong>Top Level Domain:</strong> {country.tld?.[0]}
                </p>
                <p>
                  <strong>Currencies:</strong>{' '}
                  {Object.values(country.currencies || {})
                    .map((c) => c.name)
                    .join(', ')}
                </p>
                <p>
                  <strong>Languages:</strong>{' '}
                  {Object.values(country.languages || {}).join(', ')}
                </p>
              </div>
            </div>
            <div className={styles.borderCountriesContainer}>
              <p className={styles.borderCountriesLabel}>Border Countries:</p>
              {borderCountries.length > 0 ? (
                <div className={styles.borderCountries}>
                  {borderCountries.map((name) => (
                    <div className={styles.borderCountry} key={name}>
                      {name}
                    </div>
                  ))}
                </div>
              ) : (
                <p>No border countries</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
