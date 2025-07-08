"use client";
import { useRouter } from "next/navigation";

export default function CountryCard({ country }) {
  const router = useRouter();
  return (
    <div onClick={() => router.push(`/${country.name.common}`)}>
      <img src={country.flags.png} alt={`${country.name.common} flag`} />
      <h2>{country.name.common}</h2>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Capital:</strong> {country.capital?.[0]}</p>
    </div>
  );
}
