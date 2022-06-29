import { test, expect, jest } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";
// import { userEvent } from "@testing-library/user-event";
import GoalItem from "./index.js";


test("if goal item component is rendered", () => {
    const goalItem = jest.fn();
    const goal = {goalid: 1, details: "testing", complete: false}
    render(<GoalItem goal={goal} handleToggle={goalItem}/>)

    const found = screen.getByText("testing");
    expect(found).toBeInTheDocument();
});

test("if handletoggle is called when goal item is clicked", () => {
    const goalItem = jest.fn();
    const goal = {goalid: 1, details: "testing", complete: false}
    render(<GoalItem goal={goal} handleToggle={goalItem}/>)

    const found = screen.getByText("testing");
    const event = fireEvent.click(found);
    expect(event).toBeTruthy();
});