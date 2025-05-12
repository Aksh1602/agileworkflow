import { render, screen, waitFor } from '@testing-library/react';
import Orders from './Orders';
import axios from 'axios';

jest.mock('axios');

const mockData = {
  data: {
    success: true,
    data: [
      {
        _id: '1',
        items: [{ name: 'Pizza', quantity: 2 }],
        address: {
          firstName: 'John',
          lastName: 'Doe',
          street: '123 Main St',
          city: 'City',
          state: 'State',
          country: 'Country',
          zipcode: '12345',
          phone: '1234567890',
        },
        amount: 500,
        status: 'Food Processing',
      },
    ],
  },
};

describe('Orders Component', () => {
  it('fetches and displays order data', async () => {
    axios.get.mockResolvedValue(mockData);
    render(<Orders />);
    await waitFor(() => {
      expect(screen.getByText('Order Page')).toBeInTheDocument();
      expect(screen.getByText(/Pizza x 2/i)).toBeInTheDocument();
      expect(screen.getByText(/Items : 1/)).toBeInTheDocument();
    });
  });
});
