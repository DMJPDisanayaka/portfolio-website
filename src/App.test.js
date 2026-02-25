import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio headline', () => {
  render(<App />);
  const headingElement = screen.getByText(/Designing important digital experiences/i);
  expect(headingElement).toBeInTheDocument();
});
