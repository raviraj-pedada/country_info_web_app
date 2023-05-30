import React from 'react';

// The component takes in a single prop 'data'
// which is an array of objects containing country details.
const CountryDetails = ({ data }) => {
  // The JSX inside the component returns a div
  // containing various country details.
  return (
    <div className="country-details">
      <h1>{data[0].name}</h1>
      <p>Capital: {data[0].capital}</p> 
      <p>Population: {data[0].population}</p> 
      <p>
        Currency: {data[0].currencies[0].name} ({data[0].currencies[0].symbol})
      </p> 
      <p>
        Languages: {data[0].languages.map((lang) => lang.name).join(', ')}
      </p> 
      <img src={data[0].flag} alt={`${data[0].name} flag`} width="200" /> 
    </div>
  );
};

export default CountryDetails;
