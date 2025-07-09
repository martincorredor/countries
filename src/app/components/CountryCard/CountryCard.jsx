'use client';
import { useRouter } from 'next/navigation';
import styles from './CountryCard.module.css';

export default function CountryCard({ country }) {
  const router = useRouter();
  return (
    <div
      className={styles.card}
      onClick={() => router.push(`/${country.name.common}`)}
    >
      <img
        className={styles.cardImage}
        src={country.flags.png}
        alt={`${country.name.common} flag`}
      />
      <h2 className={styles.cardTitle}>{country.name.common}</h2>
      <div className={styles.cardInfo}>
        <p>
          <strong>Population:</strong> {country.population.toLocaleString()}
        </p>
        <p>
          <strong>Region:</strong> {country.region}
        </p>
        <p>
          <strong>Capital:</strong> {country.capital?.[0]}
        </p>
      </div>
    </div>
  );
}
