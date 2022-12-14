import React from 'react'
import { fireEvent, render, screen, } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing';
import App from './App'
import { GET_COUNTRIES } from './utils/queries';

const mocks = [
  {
    request: {
      query: GET_COUNTRIES
    },
    result: {
      data: {
        countries: {
           code: 'NG', name: 'Nigeria', currency: 'NGN' ,
           emoji: '', continent: {name: 'Africa'}
          }
      }
    }
  }
];

const mockError = [
  {
    request: {
      query: GET_COUNTRIES
    },
    error: new Error('An error occurred')
  }
];


test('renders', async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
    <App />
  </MockedProvider>)
  const loading = screen.getByText(/loading/i)
  const search = screen.getByTestId('search')

  expect(loading).toBeInTheDocument();
  expect(await screen.findByText(/countries catalogue/i)).toBeInTheDocument();
  expect(search).toBeInTheDocument();

})

