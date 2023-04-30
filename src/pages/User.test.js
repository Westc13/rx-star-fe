import { render, screen } from "@testing-library/react";
import User from "./User";

test("renders User correctly", () => {
  render(<User />);
  expect(screen.getByText("Medical Conditions")).toBeInTheDocument();
});
