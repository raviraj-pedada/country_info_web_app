import React from 'react';

// The component takes in two props:
// data: an array of objects containing country details
// handleCountryClick: a function to handle clicking on a country in the list
const CountryList = ({ data, handleCountryClick }) => {
  // The JSX inside the component returns a div
  // containing an unordered list of country names.
  return (
    <div className="country-list">
      <h1>Country Names:</h1> 
      <ul>
        {data.map((country) => (
          <li key={country.name}>
            <a
              href="/#"
              onClick={() => handleCountryClick(country)}
              style={{ cursor: 'pointer' }}
            >
              {country.name}
            </a>
          </li>
        ))}
      </ul> 
    </div>
  );
};

export default CountryList;
