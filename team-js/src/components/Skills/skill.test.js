import { test, expect, jest } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";
import Skills from "./index.js";

test("renders the SkillInput", () => {
  const addSkill = jest.fn();
  const array = {
    payload: [
      { skillsid: 1, title: "TESTname", star: 3, notes: "" },
      { skillsid: 2, title: "TESTname2", star: 4, notes: "" },
    ],
  };

  render(<Skills skillsList={array} buttonText={"test"} addSkill={addSkill} />);

  const buttonText = screen.getByText("test");
  const skillCard = screen.getAllByLabelText("skill-card1");

  expect(buttonText).toBeInTheDocument();
  expect(skillCard.length).toBe(2);
});
