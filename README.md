# Food Delivery App 🍔

A React-based food delivery application that allows users to browse restaurants, view menus, and manage a shopping cart.

## Features

- **Restaurant Listing**: Fetches live restaurant data from the Swiggy API.
- **Search & Filter**: Search for restaurants by name or filter by top-rated options.
- **Restaurant Menu**: Detailed menu view with categorized items (Accordion style).
- **Controlled Components**: Accordion menus managed via lifted state to ensure only one category opens at a time.
- **Cart Management (Redux Toolkit)**: Fully functional cart allowing users to add food items, view their selections, and clear the cart seamlessly.
- **Global State**: Uses React Context API for managing user information globally and Redux Toolkit for handling the cart state across components.
- **Custom Hooks**: Modular custom hooks like `useOnlineStatus` and `useRestaurantMenu` for cleaner components.
- **Lazy Loading (Code Splitting)**: Optimized bundle size using React `lazy` and `Suspense` for the Grocery and About pages.
- **Higher-Order Components**: Enhances existing components, such as adding an "Open" label to `RestaurantCard`.
- **Offline Support**: Real-time network status detection warning users when they lose internet connection.
- **Class & Functional Components**: Incorporates both paradigms, demonstrating component structures and context usage.
- **Shimmer UI**: Loading skeletons for a better user experience.
- **Routing**: Client-side routing using React Router.
- **Responsive Design**: Styled with Tailwind CSS.

## Tech Stack

- **Frontend**: React.js (Functional & Class Components, Context API, Hooks)
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

## React Concepts & Hooks Used

This project makes extensive use of React Hooks to manage state, side effects, and routing within functional components:

- **`useState`**: Used to manage local component state (e.g., search queries, filtering lists, toggling accordion elements).
- **`useEffect`**: Used to perform side effects like data fetching from APIs upon component mount.
- **`useContext`**: Used to consume the `UserContext` for global user data.
- **`useParams` / `useRouteError`**: Provided by React Router DOM to extract URL parameters (like `resId`) and gracefully handle routing errors.
- **Custom Hooks (`useRestaurantMenu`, `useOnlineStatus`)**: Abstracted logic to fetch specific restaurant menu data and track network status, promoting clean code and reusability.
- **`lazy` & `Suspense`**: For dynamic imports and lazy loading route components.

## Redux Toolkit Integration

The application utilizes **Redux Toolkit (RTK)** to manage the complexity of the shopping cart's global state:
- **Store (`appStore`)**: The central store providing the cart state to the application via React-Redux's `<Provider>`.
- **Cart Slice (`CartSlice`)**: Contains the cart state array and reducer functions (`addItem`, `clearCart`) to modify it.
- **`useSelector`**: Subscribes components like the `Header` to the store to dynamically update the cart item count badge in real-time.
- **`useDispatch`**: Allows components like `ItemList` and `Cart` to dispatch actions to modify the cart (e.g., adding an item to the list or clearing out all items).

*Note: This project uses the Swiggy Public API for educational purposes.*