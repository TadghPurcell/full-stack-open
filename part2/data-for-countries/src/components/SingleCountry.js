const SingleCountry = ({
  alt1,
  alt2,
  area,
  capital,
  languages,
  name,
  src1,
  src2,
  temp,
  wind,
}) => {
  const allLanguages = Object.values(languages).map((language) => (
    <li key={language}>{language}</li>
  ));

  return (
    <div>
      <h1>{name}</h1>
      <p>Capital {capital}</p>
      <p>Area {area}</p>
      <h3>Languages:</h3>
      <ul>{allLanguages}</ul>
      <img alt={alt1} src={src1} />
      <h1>Weather in {capital}</h1>
      <p>Temperature {temp} Celcius</p>
      <img alt={alt2} src={src2} />
      <p>Wind {wind} m/s</p>
    </div>
  );
};

export default SingleCountry;
