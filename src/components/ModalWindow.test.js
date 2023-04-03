import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ModalWindow from "./ModalWindow";

describe("ModalWindow component", () => {
  const handleClose = jest.fn();
  const lastChosenProduct = {
    name: "apple",
    price: 100,
    url: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F39%2F2012%2F06%2F20222932%2Frome_3.jpg",
    articul: 15339,
    color: "light-red"
  };
  const header = "Are you sure?";
  const text = "Are you sure you want to delete this product from the cart?";
  const actions = (
    <>
      <button data-testid="ok-button" onClick={handleClose}>
        Ok
      </button>
      <button data-testid="no-button" onClick={handleClose}>
        No
      </button>
    </>
  );
  const props = {
    show1: true,
    handleClose: handleClose,
    closeButton: true,
    header: header,
    text: text,
    lastChosenProduct: lastChosenProduct,
    actions: actions,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render the modal with correct header and text", () => {
    const { container } = render(<ModalWindow {...props} />);
    const headerElement = screen.getByText(header);
    const textElement = screen.getByText(text);
    expect(headerElement).toBeDefined();
    expect(textElement).toBeDefined();
    expect(container).toMatchSnapshot();
  });

  it("should render the modal with an image of last chosen product if it exists", () => {
    render(<ModalWindow {...props} />);
    const imageElement = screen.getByAltText("food");
    expect(imageElement).toBeDefined();
  });

  it("should call handleClose function when Ok or No button is clicked", () => {
    render(<ModalWindow {...props} />);
    const okButton = screen.getByTestId("ok-button");
    const noButton = screen.getByTestId("no-button");
    fireEvent.click(okButton);
    fireEvent.click(noButton);
    expect(handleClose).toHaveBeenCalledTimes(2);
  });
});

