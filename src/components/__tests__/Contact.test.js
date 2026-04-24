import { render, screen } from '@testing-library/react';
import Contact from '../Contact';
import "@testing-library/jest-dom";

describe("Contact component", () => {

it("renders Contact heading", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading", { name: /contact us/i });

  //Assertion
  expect(heading).toBeInTheDocument();
});

it("renders name input", () => {
  render(<Contact />);
  const inputName = screen.getByPlaceholderText(/your name/i);

  //Assertion
  expect(inputName).toBeInTheDocument();
});

it("renders email text", () => {
  render(<Contact />);
  const email = screen.getByText(/email:/i);

  //Assertion
  expect(email).toBeInTheDocument();
});

it("Should load 2 inputs boxes on the contact components", ()=>{
  render(<Contact />);

  //Querying
  const inputElements = screen.getAllByRole("textbox");

  //console.log(inputElements);

  //Assertion
  expect(inputElements.length).toBe(3);
});
})

