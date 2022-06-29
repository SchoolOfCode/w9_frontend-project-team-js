import { test, expect, jest } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";
import DisplaySkills from "./index.js";

test("renders the DisplayCard", () => {
  const callStarFunction = jest.fn();
  const array = {
    payload: [
      { skillsid: 1, title: "TESTname", star: 3, notes: "" },
      { skillsid: 2, title: "TESTname2", star: 4, notes: "" },
    ],
  };

  render(<DisplaySkills arr={array} callStarFunction={callStarFunction} />);

     const skillCard = screen.getAllByLabelText('skill-card1')

     expect(skillCard.length).toBe(2);
});
