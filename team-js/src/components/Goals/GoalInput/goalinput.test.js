import { test, expect, jest } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";
// import { userEvent } from "@testing-library/user-event";
import Input from "./index.js";

test("renders an <input> in document", () => {
  render(<Input buttonText="test" addGoal={jest.fn()} />);

  const tag = screen.getByRole("textbox");
  expect(tag).toBeInTheDocument();
});

test("renders button that calls function onClick", () => {
  //const user = userEvent.setup();

  render(<Input addGoal={jest.fn()} onClick={jest.fn()} />);

  const tag = screen.getByRole("button");
  const event = fireEvent.click(tag);
  expect(event).toBeTruthy();
});

test("whether text can be typed into input field", () => {
  render(<Input buttonText="test" addGoal={jest.fn()} />);
  const tag = screen.getByRole("textbox");
  const typed = fireEvent.keyDown(tag);

  console.dir(typed);
  expect(typed).toBeTruthy();
});
