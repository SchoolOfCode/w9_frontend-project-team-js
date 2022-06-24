import { test, expect, jest } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";
import Profile from "./index.js";

const profileDetails = {
  success: true,
  payload: [
    {
      userid: 1,
      name: "Claudia",
      bio: "I am a woman",
      imagesrc:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/therock-253954517-279993034023432-628278073878740852-n-1636731864.jpg",
      skillsgood: "JavaScript, node.js, cypress",
      skillsbad: "CSS, React, Backend",
    },
  ],
};

test("renders Profile card with user name Claudia", () => {
  render(<Profile profileDetails={profileDetails} />);

  const name = screen.getByText("Claudia");

  expect(name).toBeInTheDocument();
});

test("renders Profile card with user image", () => {
  render(<Profile profileDetails={profileDetails} />);

  const profilePic = screen.getByRole("img");

  expect(profilePic).toBeInTheDocument();
  expect(profilePic).toHaveAttribute(
    "src",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/therock-253954517-279993034023432-628278073878740852-n-1636731864.jpg"
  );
});
