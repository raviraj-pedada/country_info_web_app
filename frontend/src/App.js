import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountryForm from './CountryForm';
import CountryList from './CountryList';
import CountryDetails from './CountryDetails';

function App() {
  // Define three state variables using the useState hook.
  // country: stores the current value of the country input field.
  // data: stores an array of objects containing country details.
  // error: stores an error message if there is an error fetching country data.
  const [country, setCountry] = useState('');
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  // handleChange: a function that sets the value of the country state to the value of the input field.
  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  // handleSubmit: an async function that handles submitting the form.
  // It sends a GET request to the API to retrieve the country data.
  // If successful, it sets the data state to the response data.
  // If there is an error, it sets the data state to an empty array and sets the error state to an error message.
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    try {
      const url = `http://localhost:3001/api/country/${country}`;
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.error(error);
      setData([]);
      setError('Country not found.');
    }
  };

  // handleCountryClick: a function that sets the data state to an array containing only the clicked country object.
  const handleCountryClick = (country) => {
    setData([country]);
  };

  // useEffect: a hook that runs once when the component mounts.
  // It sends a GET request to the API to retrieve all countries data.
  // If successful, it sets the data state to the response data.
  // If there is an error, it sets the data state to an empty array.
  useEffect(() => {
    const fetchAllCountries = async () => {
      try {
        const url = `http://localhost:3001/api/all-countries`;
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.error(error);
        setData([]);
      }
    };

    fetchAllCountries();
  }, []);

  // The JSX inside the component returns a div that contains the CountryForm component,
  // an error message if there is an error, or a message prompting the user to enter a country name.
  // If data is not an empty array, it returns a div that contains the CountryList and CountryDetails components.
  return (
    <div className="container">
      <CountryForm
        country={country}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {error && <p>{error}</p>}
      {data.length > 0 ? (
        <div className="country-details-container">
          <CountryList data={data} handleCountryClick={handleCountryClick} />
          <CountryDetails data={data} />
        </div>
      ) : (
        <p>Enter the Country Name</p>
      )}
    </div>
  );
}

export default App;
