import { useState } from "react";

const Country = ({ alt, area, capital, languages, name, src }) => {
  const [btnText, setBtnText] = useState("show");
  const [divHidden, setDivHidden] = useState({ display: "none" });
  const [show, setShow] = useState(true);

  const allLanguages = Object.values(languages).map((language) => (
    <li key={language}>{language}</li>
  ));

  const handleClick = () => {
    if (show) {
      setBtnText("hide");
      setDivHidden({});
    }

    if (!show) {
      setBtnText("show");
      setDivHidden({ display: "none" });
    }
    setShow(!show);
  };

  return (
    <div>
      <p style={{ textTransform: "capitalize" }} key={name}>
        {name}
      </p>
      <button onClick={handleClick}>{btnText}</button>
      <div className={name} style={divHidden}>
        <h1>{name}</h1>
        <p>Capital {capital}</p>
        <p>Area {area}</p>
        <h3>Languages:</h3>
        <ul>{allLanguages}</ul>
        <img alt={alt} src={src} />
      </div>
    </div>
  );
};

export default Country;
