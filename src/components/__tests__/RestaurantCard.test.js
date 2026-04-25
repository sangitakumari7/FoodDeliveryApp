import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import RestaurantCard from '../RestaurantCard';
import MOCK_DATA from "../mocks/resCardMock.json";

it("Should render RestaurantCard component with props Data", () => {

  render(<RestaurantCard resData={{ info: MOCK_DATA }} />);

    const name = screen.getByText("Subway");

    expect(name).toBeInTheDocument();
});


it("Should render RestaurantCard component with isOpen prop", () => {

  render(<RestaurantCard resData={{ info: MOCK_DATA }} isOpen={true} />);
    const name = screen.getByText("Subway");

    expect(name).toBeInTheDocument();
});       
