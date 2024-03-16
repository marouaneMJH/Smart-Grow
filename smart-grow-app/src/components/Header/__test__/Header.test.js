import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";

test("renders header with title and navigation", () => {
    const { getByText } = render(<Header />);

    expect(getByText("Grow")).toBeInTheDocument();
    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("About")).toBeInTheDocument();
    expect(getByText("Contact")).toBeInTheDocument();
    expect(getByText("Login")).toBeInTheDocument();
});
