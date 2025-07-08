import axios from "axios";
import Link from "next/link";
import Header from '../components/Header/Header';

export default async function CountryDetail({ params }) {
    console.log("params: ", params);
  const countryName = decodeURIComponent(params.country);

  const res = await axios.get(
    `https://restcountries.com/v3.1/name/${countryName}?fullText=true&fields=name,flags,population,region,subregion,capital,tld,currencies,languages,borders`
  );
  const country = res.data[0];

  return (
    <div className="detail-container">
      <Header />
      <Link href="/">← Back</Link>

      <div className="detail">
        <img src={country.flags.png} alt={`${country.name.common} flag`} />

        <div className="info">
          <h2>{country.name.common}</h2>
          <p><strong>Native Name:</strong> {Object.values(country.name.nativeName || {})[0]?.common}</p>
          <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
          <p><strong>Region:</strong> {country.region}</p>
          <p><strong>Sub Region:</strong> {country.subregion}</p>
          <p><strong>Capital:</strong> {country.capital?.[0]}</p>
          <p><strong>Top Level Domain:</strong> {country.tld?.[0]}</p>
          <p><strong>Currencies:</strong> {Object.values(country.currencies || {}).map(c => c.name).join(", ")}</p>
          <p><strong>Languages:</strong> {Object.values(country.languages || {}).join(", ")}</p>
          <p><strong>Border Countries:</strong> {country.borders?.join(", ") || "None"}</p>
        </div>
      </div>
    </div>
  );
}
