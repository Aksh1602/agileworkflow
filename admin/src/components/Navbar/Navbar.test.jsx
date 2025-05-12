import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar Component', () => {
  it('renders logo and profile image', () => {
    render(<Navbar />);
    const images = screen.getAllByRole('img');
    expect(images.length).toBe(2);
  });
});
