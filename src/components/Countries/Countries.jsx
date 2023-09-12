import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    const [visitesCountries, setVisitedCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitedCountries = country => {
        const newVisitedCountry = [...visitesCountries, country];
        setVisitedCountries(newVisitedCountry)
    }

    return (
        <div>
            <div>
                <h2>{visitesCountries.length} Countries I Visited Yet</h2>
                <div className="visited-flags">
                    {
                        visitesCountries.map(country => <img key={country.cca3} src={country.flags.png}></img>)
                    }
                </div>
            </div>

            <div className="countries-container">
                {
                    countries.map(country => <Country
                        key={country.cca3}
                        handleVisitedCountries={handleVisitedCountries}
                        country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;