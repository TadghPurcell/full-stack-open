import { useEffect, useState } from "react";
import Country from "./components/Country";
import SingleCountry from "./components/SingleCountry";

const App = () => {
  const [data, setData] = useState([]);
  const [countries, setCountries] = useState([]);
  const [currentWeather, setCurrentWeather] = useState([]);
  const [search, setSearch] = useState(null);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const getData = async function () {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();

        setData(data);
      } catch {}
    };
    getData();

    const weather = async (capital) => {
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=8b62768b3aa44848bb8113142230304&q=${capital.toLowerCase()}`
      );
      const data = await res.json();
      setCurrentWeather([
        data.current.temp_c,
        data.current.wind_kph,
        data.current.condition.icon,
        data.current.condition.text,
      ]);
    };

    if (countries.length === 1) {
      weather(countries[0].capital[0].toLowerCase());
    }
  }, [search]);

  const handleChange = (e) => {
    const change = e.target.value.toLowerCase();
    setSearch(change);
    setCountries(
      data.filter((country) =>
        country.name.common.toLowerCase().includes(search)
      )
    );
  };

  const showHide = () => {
    return setShow(!show);
  };

  const filterCountries = () => {
    const filteredCountries = data.filter((country) =>
      country.name.common.toLowerCase().includes(search)
    );

    if (filteredCountries.length >= 10)
      return <p>Too many matches, specify another filter</p>;

    if (filteredCountries.length === 1) {
      return (
        <SingleCountry
          alt1={filteredCountries[0].flags.alt}
          alt2={currentWeather[3]}
          name={filteredCountries[0]?.name.common}
          capital={filteredCountries[0].capital[0]}
          area={filteredCountries[0].area}
          languages={filteredCountries[0].languages}
          src1={filteredCountries[0].flags.png}
          src2={currentWeather[2]}
          temp={currentWeather[0]}
          wind={currentWeather[1]}
        />
      );
    }
    return filteredCountries.map((country) => (
      <Country
        alt={country.flags.alt}
        area={country.area}
        capital={country.capital[0]}
        languages={country.languages}
        name={country.name.common}
        src={country.flags.png}
        show={show}
        showHide={showHide}
      />
    ));
  };

  return (
    <div>
      <div>
        find countries <input onChange={handleChange} />
      </div>
      {filterCountries()}
    </div>
  );
};

export default App;
