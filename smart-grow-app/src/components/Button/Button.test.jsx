/** @jsxImportSource @emotion/react */
import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";
test("renders button with correct text", () => {
    render(<Button>Click me!</Button>);
    const button = screen.getByText("Click me!");
    expect(button).toBeInTheDocument();
});
