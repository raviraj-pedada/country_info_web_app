import React from 'react';

// The component takes in three props:
// country: the current value of the country input field
// handleChange: a function to handle changes to the input field
// handleSubmit: a function to handle form submission
const CountryForm = ({ country, handleChange, handleSubmit }) => {
  // The JSX inside the component returns a form
  // containing a label, input field, and a submit button.
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Country Name:
        <input type="text" value={country} onChange={handleChange} />
      </label> 
      <button type="submit">Submit</button> 
    </form>
  );
};

export default CountryForm;
