import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './Sidebar';

const MockSidebar = () => (
  <BrowserRouter>
    <Sidebar />
  </BrowserRouter>
);

describe('Sidebar Component', () => {
  it('renders 3 nav links', () => {
    render(<MockSidebar />);
    const links = screen.getAllByRole('link');
    expect(links.length).toBe(3);
  });
});
