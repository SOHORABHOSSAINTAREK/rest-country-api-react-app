import { useState } from 'react';
import './Country.css'
const Country = ({ country, handleVisitedCountries }) => {
    const { name, flags, population, area } = country;
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }
    // console.log(handleVisitedCountries);
    return (
        <div className="country">
            <img style={{ width: '300px', height: '200px' }} src={flags.png} alt="" />
            <h3 style={{ color: visited ? 'green' : 'black' }}>{name?.common}</h3>
            <h4>Population: {population}</h4>
            <h4>Area: {area}</h4>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            <button onClick={() => handleVisitedCountries(country)} disabled={visited ? false : true}>Add Visited</button>
            <p>{visited ? `I Have Visited ${name.common}` : `I do not Visited  ${name.common}`}</p>
        </div>
    );
};

export default Country;