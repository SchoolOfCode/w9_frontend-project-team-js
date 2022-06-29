import { test, expect, jest } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";
import SkillCard from "./index.js";

test("renders skill card with props passed", () => {
  render(
    <SkillCard id={123} title={"test"} starRating={5} notes={"anything"} />
  );

  const title = screen.getByText("test");
  const notes = screen.getByText("anything");
  const collapseComponent = screen.getByRole("button");

  expect(title).toBeInTheDocument();
  expect(notes).toBeInTheDocument();

  // below tests if collapsible is created
  expect(collapseComponent).toBeInTheDocument();
});
