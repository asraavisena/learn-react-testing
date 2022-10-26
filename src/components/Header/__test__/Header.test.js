import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
  it("Should render same text passed into title prop", () => {
    render(<Header title={"My Header"} />);
    const headingElement = screen.getByText(/My Header/i); // => get the text inside the tag
    expect(headingElement).toBeInTheDocument();
  });

  // ! KALAU SATU HEADER
  // it("Should render 1 heading passed into title props", () => {
  //   render(<Header title={"My Header"} />);
  //   const headingElement = screen.getByRole("heading"); // => get tag 
  //   expect(headingElement).toBeInTheDocument();
  // });

  // it("Should render 2 heading passed into title props", () => {
  //   render(<Header title={"My Header"} />);
  //   const headingElement = screen.getByRole("heading", { name: "My Header" });
  //   expect(headingElement).toBeInTheDocument();
  // });

  // // ! SEMANTIC
  // it("Should test semantic", () => {
  //   render(<Header title={"My Header"} />);
  //   const headingElement = screen.getByTitle("Header");
  //   expect(headingElement).toBeInTheDocument();
  // });

  // it("Should test by id", () => {
  //   render(<Header title={"My Header"} />);
  //   const headingElement = screen.getByTestId("test-1");
  //   expect(headingElement).toBeInTheDocument();
  // });

  // it("Should test find by", async () => {
  //   render(<Header title={"My Header"} />);
  //   const headingElement = await screen.findByText(/My Header/i);
  //   expect(headingElement).toBeInTheDocument();
  // });

  // it("Should test find by but negation", async () => {
  //   render(<Header title={"My Header"} />);
  //   const headingElement = screen.queryByText(/dogs/i);
  //   expect(headingElement).not.toBeInTheDocument();
  // });

  // it("Should render same text passed into title prop array", async () => {
  //   render(<Header title={"My Header"} />);
  //   const headingElements = screen.getAllByRole("heading");
  //   expect(headingElements.length).toBe(2);
  // });
})