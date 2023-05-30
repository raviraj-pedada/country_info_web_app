import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CountryForm from './CountryForm';

describe('CountryForm component', () => {
  it('should render the form correctly', () => {
    const country = 'Test Country';
    const handleChange = jest.fn();
    const handleSubmit = jest.fn();

    const { getByLabelText, getByText } = render(
      <CountryForm country={country} handleChange={handleChange} handleSubmit={handleSubmit} />
    );

    // Check if form elements are rendered correctly
    expect(getByLabelText('Country Name:')).toBeInTheDocument();
    expect(getByText('Submit')).toBeInTheDocument();
  });

  it('should call handleChange when input value changes', () => {
    const country = 'Test Country';
    const handleChange = jest.fn();
    const handleSubmit = jest.fn();

    const { getByLabelText } = render(
      <CountryForm country={country} handleChange={handleChange} handleSubmit={handleSubmit} />
    );

    // Change input value
    fireEvent.change(getByLabelText('Country Name:'), { target: { value: 'New Country' } });

    // Check if handleChange is called with the correct value
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(expect.objectContaining({ target: { value: 'New Country' } }));
  });

  it('should call handleSubmit when form is submitted', () => {
    const country = 'Test Country';
    const handleChange = jest.fn();
    const handleSubmit = jest.fn();

    const { getByText } = render(
      <CountryForm country={country} handleChange={handleChange} handleSubmit={handleSubmit} />
    );

    // Click submit button
    fireEvent.click(getByText('Submit'));

    // Check if handleSubmit is called
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
