import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CountryList from './CountryList';

const testData = [
  { name: 'Country 1', capital: 'Capital 1', population: 1000000 },
  { name: 'Country 2', capital: 'Capital 2', population: 2000000 },
  { name: 'Country 3', capital: 'Capital 3', population: 3000000 },
];

describe('CountryList component', () => {
  it('should render the list of countries correctly', () => {
    const handleCountryClick = jest.fn();

    const { getByText } = render(<CountryList data={testData} handleCountryClick={handleCountryClick} />);

    // Check if country names are rendered correctly
    expect(getByText('Country Names:')).toBeInTheDocument();
    expect(getByText('Country 1')).toBeInTheDocument();
    expect(getByText('Country 2')).toBeInTheDocument();
    expect(getByText('Country 3')).toBeInTheDocument();
  });

  it('should call handleCountryClick when a country is clicked', () => {
    const handleCountryClick = jest.fn();

    const { getByText } = render(<CountryList data={testData} handleCountryClick={handleCountryClick} />);

    // Click on a country
    fireEvent.click(getByText('Country 1'));

    // Check if handleCountryClick is called with the correct country data
    expect(handleCountryClick).toHaveBeenCalledTimes(1);
    expect(handleCountryClick).toHaveBeenCalledWith(expect.objectContaining({ name: 'Country 1' }));
  });

  it('should have correct URL in anchor href', () => {
    const handleCountryClick = jest.fn();

    const { getByText } = render(<CountryList data={testData} handleCountryClick={handleCountryClick} />);

    // Check if anchor href has correct URL
    expect(getByText('Country 1').getAttribute('href')).toEqual('/#');
  });
});
