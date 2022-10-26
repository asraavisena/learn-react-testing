import { render, screen } from "@testing-library/react";
import Header from "../Header";

it("Should render same text passed into title prop", () => {
  render(<Header title={"My Header"} />);
  const headingElement = screen.getByText(/My Header/i);
  expect(headingElement).toBeInTheDocument();
});

// ! KALAU SATU HEADER
// it("Should render same text passed into title prop s", () => {
//   render(<Header title={"My Header"} />);
//   const headingElement = screen.getByRole("heading");
//   expect(headingElement).toBeInTheDocument();
// });

// it("Should render same text passed into title prop s", () => {
//   render(<Header title={"My Header"} />);
//   const headingElement = screen.getByRole("heading", { name: "My Header" });
//   expect(headingElement).toBeInTheDocument();
// });

// it("Should render same text passed into title prop title", () => {
//   render(<Header title={"My Header"} />);
//   const headingElement = screen.getByTitle("Header");
//   expect(headingElement).toBeInTheDocument();
// });

// it("Should render same text passed into title prop test id", () => {
//   render(<Header title={"My Header"} />);
//   const headingElement = screen.getByTestId("test-1");
//   expect(headingElement).toBeInTheDocument();
// });

// it("Should render same text passed into title prop async", async () => {
//   render(<Header title={"My Header"} />);
//   const headingElement = await screen.findByText(/My Header/i);
//   expect(headingElement).toBeInTheDocument();
// });

// it("Should render same text passed into title prop query", async () => {
//   render(<Header title={"My Header"} />);
//   const headingElement = screen.queryByText(/dogs/i);
//   expect(headingElement).not.toBeInTheDocument();
// });

// it("Should render same text passed into title prop array", async () => {
//   render(<Header title={"My Header"} />);
//   const headingElements = screen.getAllByRole("heading");
//   expect(headingElements.length).toBe(2);
// });
