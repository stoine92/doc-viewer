import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ButtonIcon from "./ButtonIcon";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

describe("ButtonIcon", () => {
    it("renders correctly", () => {
        render(<ButtonIcon icon={KeyboardArrowDownOutlinedIcon}/>);

        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
    
    it("applies custom className", () => {
        render (<ButtonIcon icon={KeyboardArrowDownOutlinedIcon} className="test-class" />);

        const button = screen.getByRole("button");
        expect(button).toHaveClass("test-class");
    });

    it("sets correct button type", () => {
        render (<ButtonIcon icon={KeyboardArrowDownOutlinedIcon} type="submit" />);

        const button = screen.getByRole("button");
        expect(button).toHaveAttribute("type", "submit");
    });
    
});