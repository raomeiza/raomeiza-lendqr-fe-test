import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import Login from "./login";

test('it renders without crashing', () => {
  render(<Login setShowLoading={undefined} />);
  const linkElement = screen.getByText(/Welcome!/i);
  // get all input elements
  const inputElements = screen.getAllByRole('textbox');
  expect(linkElement).toBeInTheDocument();
  expect(inputElements.length).toBe(1);
});

test('renders invalid password error', async () => {
  render(<Login setShowLoading={undefined} />);
  const passwordInput = screen.getByLabelText(/Password/i);
  const submitButton = screen.getByRole('submit');
  // type in invalid password
  fireEvent.change(passwordInput, { target: { value: '123' } });
  // click submit button
  fireEvent.click(submitButton);
  // get error message
  // eslint-disable-next-line testing-library/no-debugging-utils
  screen.debug();
  // const errorMessage = screen.getByText(/Invalid password/i);
  // expect(errorMessage).toBeInTheDocument();
});

test('renders invalid email error', async () => {
  render(<Login setShowLoading={undefined} />);
  // get email input element by id
  const emailInput = screen.getByLabelText(/Email/i);
  const submitButton = screen.getByRole('submit');
  // type in invalid email
  fireEvent.change(emailInput, { target: { value: '123' } });
  // click submit button
  fireEvent.click(submitButton);
  // get error message
  // eslint-disable-next-line testing-library/no-debugging-utils
  screen.debug();
  // const errorMessage = screen.getByText(/Invalid email/i);
  // expect(errorMessage).toBeInTheDocument();
});