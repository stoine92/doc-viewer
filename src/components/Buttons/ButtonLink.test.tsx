import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ButtonLink from "./ButtonLink";

describe("ButtonLink", () => {
    it("renders children correctly", () => {
        render(<ButtonLink>Click</ButtonLink>);

        const button = screen.getByRole("button", { name: /click/i });
        expect(button).toBeInTheDocument();
    });

    it("applies custom className", () => {
        render (<ButtonLink className="test-class">Click</ButtonLink>);

        const button = screen.getByRole("button");
        expect(button).toHaveClass("test-class");
    });
});