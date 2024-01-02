import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const API_URL = " https://ih-countries-api.herokuapp.com/countries";

function CountryDetails() {
  const [country, setCountry] = useState();
    
  const { countryId } = useParams();

  const getCountryId = () => {
    axios
      .get(`${API_URL}/${countryId}`)
      .then((response) => setCountry(response.data))
      .catch((error) => console.log(error));
  };

  console.log(country)

  useEffect(() => {
    getCountryId();
  }, []);

    return(
        <div className="detailPage">
            <h1>Country Details</h1>

            <div>
                {country && (
                    <>
                        <h1><b>{country.name.common}</b></h1>
                        <p className="details">Capital: {country.capital}</p>
                        <p className="details">Area: {country.area} km^2</p>
                        <p className="details">Borders:
                            <ul className="details">
                                {country.borders.map((border, i) => {
                                    return (
                                        <li key={i}> 
                                            <Link to={{border}}>{border}</Link> 
                                        </li>
                                    );
                                })}
                            </ul>
                        </p>
                    </>
                )}
            </div>
        </div>
    )
}

export default CountryDetails;
