import { test, expect, jest } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";
import SkillInput from "./index.js";

test("renders the SkillInput", () => {
  render(<SkillInput buttonText={"test"} />);

  const skillInput = screen.getByRole("textbox");
  const buttonText = screen.getByText("test");

  expect(skillInput).toBeInTheDocument();
  expect(buttonText).toBeInTheDocument();
});
