import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = " https://ih-countries-api.herokuapp.com/countries";

function HomePage() {
    const [countries, setCountries] = useState();

    const getAllCountries = () => {
        axios
          .get(`${API_URL}`)
          .then((response) => setCountries(response.data))
          .catch((error) => console.log(error));
    };

    console.log(countries)
    
    useEffect(() => {
        getAllCountries();
    }, [] );

    return(
        <div className="homePage">
            <h1>WikiCountries: Your Guide to the World</h1>

            <div>
                {countries &&
                    countries.map((country, i) => {
                        return (
                            <div key={i}>
                                <Link to={country.alpha3Code} className="country">
                                    <div>
                                        <div>
                                            <h5>{country.alpha2Code} {country.name.common}</h5>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        );
                })}
            </div>
        </div>
    )
}

export default HomePage;
