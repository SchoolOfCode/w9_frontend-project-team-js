import { test, expect, jest } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";
// import { userEvent } from "@testing-library/user-event";
import GoalCard from "./index.js";


test("if goals card component is rendered", () => {
    const mock = jest.fn();
    const goalList = [{goalid: 1, details: "testing", complete: false}]
    render(<GoalCard handleToggle={mock} goallist={goalList} handleFilter={mock} addGoal={goalList} buttonText={"testing"}/>)
})