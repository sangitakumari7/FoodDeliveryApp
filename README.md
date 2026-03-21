# Food Delivery App 🍔

A React-based food delivery application that allows users to browse restaurants, view menus, and manage a shopping cart.

## Features

- **Restaurant Listing**: Fetches live restaurant data from the Swiggy API.
- **Search & Filter**: Search for restaurants by name or filter by top-rated options.
- **Restaurant Menu**: Detailed menu view with categorized items (Accordion style).
- **Cart Management**: Add items to the cart (managed via Redux).
- **Shimmer UI**: Loading skeletons for a better user experience.
- **Routing**: Client-side routing using React Router.
- **Responsive Design**: Styled with Tailwind CSS.

## Tech Stack

- **Frontend**: React.js (Functional & Class Components)
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM

## Getting Started

1. **Clone the repository**

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

## Project Structure

- `src/components`: Contains all React components (Header, Body, RestaurantCard, etc.).
- `src/utils`: Utility functions, constants, and Redux slices.

## React Hooks Used

This project makes extensive use of React Hooks to manage state, side effects, and routing within functional components:

- **`useState`**: Used to manage local component state (e.g., search queries, filtering lists, toggling accordion elements).
- **`useEffect`**: Used to perform side effects like data fetching from APIs upon component mount.
- **`useParams` / `useRouteError`**: Provided by React Router DOM to extract URL parameters (like `resId`) and gracefully handle routing errors.
- **`useDispatch`**: Provided by React-Redux to dispatch cart actions to the global store.
- **Custom Hook (`useRestaurantMenu`)**: Abstracted logic to fetch and return specific restaurant menu data, promoting clean code and reusability.

*Note: This project uses the Swiggy Public API for educational purposes.*