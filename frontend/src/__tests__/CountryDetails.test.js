import React from 'react';
import { render } from '@testing-library/react';
import CountryDetails from './CountryDetails';

// Mock data for testing
const testData = [
  {
    name: 'Test Country',
    capital: 'Test Capital',
    population: 1000000,
    currencies: [{ name: 'Test Currency', symbol: 'TC' }],
    languages: [{ name: 'Test Language' }],
    flag: 'test-flag-url',
  },
];

describe('CountryDetails component', () => {
  it('should render country details correctly', () => {
    const { getByText, getByAltText } = render(<CountryDetails data={testData} />);

    // Check if country details are rendered correctly
    expect(getByText('Test Country')).toBeInTheDocument();
    expect(getByText('Capital: Test Capital')).toBeInTheDocument();
    expect(getByText('Population: 1000000')).toBeInTheDocument();
    expect(getByText('Currency: Test Currency (TC)')).toBeInTheDocument();
    expect(getByText('Languages: Test Language')).toBeInTheDocument();
    expect(getByAltText('Test Country flag')).toBeInTheDocument();
  });

  it('should display error message when data is empty', () => {
    const { getByText } = render(<CountryDetails data={[]} />);

    // Check if error message is displayed
    expect(getByText('No country details available')).toBeInTheDocument();
  });

  // Add more test cases as needed for different scenarios and edge cases
});
