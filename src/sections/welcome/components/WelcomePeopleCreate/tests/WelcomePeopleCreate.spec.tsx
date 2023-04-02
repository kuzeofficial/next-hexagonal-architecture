import { render, screen, cleanup } from "@testing-library/react";
import { expect, it, beforeEach, describe, vi } from "vitest";
import WelcomePeopleCreate from "../WelcomePeopleCreate";
import { WelcomeContextProvider } from "@/sections/welcome/context";
import userEvent from "@testing-library/user-event";

beforeEach(cleanup);
const save = vi.fn();
const repository = {
  save,
  get: vi.fn(),
  getAll: vi.fn(),
};

describe("Tag Component", () => {
  it("should render a component of form and filled , and click in the submit button", async () => {
    render(
      <WelcomeContextProvider repository={repository}>
        <WelcomePeopleCreate />
      </WelcomeContextProvider>
    );

    const inputName = screen.getByPlaceholderText("Cristian Fonseca");
    await userEvent.type(inputName, "Cristian");
    const inputImage = screen.getByPlaceholderText("Image URL");
    await userEvent.type(inputImage, "https://cristianfonseca.dev/logo.png");
    const submitButton = screen.getByRole("button");
    await userEvent.click(submitButton);

    expect(save).toHaveBeenCalled();
  });
  it("should render a message of error in case of type error in inputs textbox", async () => {
    render(
      <WelcomeContextProvider repository={repository}>
        <WelcomePeopleCreate />
      </WelcomeContextProvider>
    );

    const inputName = screen.getByPlaceholderText("Cristian Fonseca");
    await userEvent.type(inputName, "Cr");
    const alerts = screen.getAllByRole("alert");
    const inputImage = screen.getByPlaceholderText("Image URL");
    await userEvent.type(inputImage, "https://cristianfonseca.de");
    const submitButton = screen.getByRole("button");
    await userEvent.click(submitButton);
    expect(alerts).toHaveLength(2);
    expect(alerts[0].textContent).toMatch("Name must be at least 3 characters");
    expect(alerts[1].textContent).toMatch("Invalid image url");
  });
});
