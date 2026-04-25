import { render, screen, fireEvent } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../../utils/CartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// ✅ Mock the hook directly
jest.mock("../../utils/useRestaurantMenu", () => () => MOCK_DATA.data);

it("Should render RestaurantMenu and show restaurant name", async () => {
  render(
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Provider store={store}>
        <RestaurantMenu />
      </Provider>
    </BrowserRouter>
  );

  const name = await screen.findByTestId("res-name");
  expect(name).toBeInTheDocument();
  expect(name.textContent).toBe("KFC");
});

it("Should load menu items after clicking category", async () => {
  render(
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Provider store={store}>
        <RestaurantMenu />
      </Provider>
    </BrowserRouter>
  );

  const categoryHeaders = await screen.findAllByTestId("category-header");
  expect(categoryHeaders.length).toBeGreaterThan(0);

  fireEvent.click(categoryHeaders[0]);

  const items = await screen.findAllByTestId("food-item");
  expect(items.length).toBeGreaterThan(0);
});