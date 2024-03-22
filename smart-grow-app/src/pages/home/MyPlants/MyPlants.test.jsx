import React from "react";
import { render, screen } from "@testing-library/react";
import Plants from "../../../components/Plant/Plant";
import Button from "../../../components/Button/Button";
import Header from "../../../components/Header/Header";

function MyPlants() {
    return (
        <div className="my-plants">
            <Header />
            <Plants />
            <Button />
        </div>
    );
}

describe("MyPlants", () => {
    test("should render Header component", () => {
        render(<MyPlants />);

        const header = screen.getByTestId("header");

        expect(header).toBeInTheDocument();
    });

    test("should render Plants component", () => {
        render(<MyPlants />);

        const plants = screen.getByTestId("plants");

        expect(plants).toBeInTheDocument();
    });

    test("should render Button component", () => {
        render(<MyPlants />);

        const button = screen.getByTestId("button");

        expect(button).toBeInTheDocument();
    });
});
