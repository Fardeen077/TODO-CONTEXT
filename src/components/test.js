import { render, screen, fireEvent } from '@testing-library/react';
import TodoApp from './TodoApp'; // Adjust the path to your component

test('adds a new todo item', () => {
  render(<TodoApp />);
  
  // Find the input and button elements
  const input = screen.getByPlaceholderText(/add a new todo/i);
  const button = screen.getByText(/add/i);

  // Simulate typing in the input field and clicking the add button
  fireEvent.change(input, { target: { value: 'Test Todo' } });
  fireEvent.click(button);

  // Check if the new todo is displayed in the list
  expect(screen.getByText('Test Todo')).toBeInTheDocument();
});
