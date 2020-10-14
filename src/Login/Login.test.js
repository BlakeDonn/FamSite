import React from "react";
import { Login } from "./Login.js";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

describe("Login", () => {
  it("Should have login input", () => {
    render(<Login />);
    expect(screen.getByText("Welcome")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
  });

  it("should redirect to eval on submission", () => {
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useHistory: () => ({
        push: jest.fn(),
      }),
    }));
    render(<Login />);
    userEvent.click(screen.getByRole("button", { name: "Submit" }));
    screen.debug();
  });
});
