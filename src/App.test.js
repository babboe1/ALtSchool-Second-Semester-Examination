import { render, screen } from '@testing-library/react';
import Attribution from './components/UI/Attribution/Attribution';

test('checks attribution name', () => {
   render(<Attribution />);
   const titleElement = screen.getByText(/babboeCodes/i);
   expect(titleElement).toBeInTheDocument();
});
