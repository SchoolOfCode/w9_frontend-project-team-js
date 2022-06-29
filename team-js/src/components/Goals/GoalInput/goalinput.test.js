import { test, expect, jest } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";
import Input from "./index.js";

test("renders an <input> in document", () => {
    render(<Input buttonText="test" addGoal={jest.fn()}/>);

    const tag = screen.getByRole("textbox");
    console.log(tag);
    expect(tag).toBeInTheDocument();
});