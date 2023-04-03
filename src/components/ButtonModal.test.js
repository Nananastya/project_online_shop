import ButtonModal from "./ButtonModal";
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

test("test button", () => {
    const handleClick = jest.fn();
    const { container } = render(
      <ButtonModal
        onClick={handleClick}
        text="Click me"
      />
    );
  
    const button = screen.getByText("Click me");
    fireEvent.click(button);
  
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(container).toMatchSnapshot();
  });
