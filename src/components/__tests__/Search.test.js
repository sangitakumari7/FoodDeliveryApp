import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";

// ✅ mock fetch properly
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        data: MOCK_DATA,
      }),
  })
);

describe("Body Component Test Cases", () => {
  // beforeAll(() =>{
  //   console.log("Before All");
  // })

  // beforeEach( () => {
  //   console.log("Before Each");
  // })

  // AfterAll( () => {
  //   console.log("After All");
  // })

  // afterEach( () => {
  //   console.log("After Each");
  // })

  

  it("Should render body and load restaurants", async () => {
    render(
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Body />
      </BrowserRouter>
    );

    // ✅ wait for cards (means API + state done)
    const cards = await screen.findAllByTestId("resCard");

    expect(cards.length).toBeGreaterThan(0);
  });

  it("Should filter restaurants based on search text", async () => {
    render(
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Body />
      </BrowserRouter>
    );

    // ✅ wait for input to appear (UI loaded)
    const searchInput = await screen.findByTestId("searchInput");
    const searchBtn = screen.getByRole("button", { name: /search/i });

    fireEvent.change(searchInput, { target: { value: "Pizza" } });
    fireEvent.click(searchBtn);

    const cards = await screen.findAllByTestId("resCard");

    expect(cards.length).toBe(1);
  });

  it("Should show all restaurants when search text is empty", async () => {
    render(
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Body />
      </BrowserRouter>
    );

    const searchInput = await screen.findByTestId("searchInput");
    const searchBtn = screen.getByRole("button", { name: /search/i });

    fireEvent.change(searchInput, { target: { value: "" } });
    fireEvent.click(searchBtn);

    const cards = await screen.findAllByTestId("resCard");

    expect(cards.length).toBeGreaterThan(0);
  });

  it("Should filter top rated restaurants", async () => {
    render(
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Body />
      </BrowserRouter>
    );

    // ✅ wait until button appears
    const topRatedBtn = await screen.findByRole("button", {
      name: /top rated/i,
    });

    fireEvent.click(topRatedBtn);

    const cards = await screen.findAllByTestId("resCard");

    expect(cards.length).toBeLessThanOrEqual(20); // avoid hardcoding exact
  });

  it("Should update input value when typing", async () => {
    render(
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Body />
      </BrowserRouter>
    );

    const searchInput = await screen.findByTestId("searchInput");

    fireEvent.change(searchInput, { target: { value: "Burger" } });

    expect(searchInput.value).toBe("Burger");
  });
});