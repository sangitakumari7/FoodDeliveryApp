import "@testing-library/jest-dom";
import {fireEvent, render, screen} from '@testing-library/react';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import Header from "../Header";
import { BrowserRouter } from 'react-router-dom';

it("Should render Header Component with a login button", () =>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", { name: /login/i });

    //Assertion
    expect(loginButton).toBeInTheDocument();
});

it("Should render Header Component with a Cart item count", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    );
    const cartItem = screen.getByText(/0/);

    //Assertion
    expect(cartItem).toBeInTheDocument();
});

it("Should render Header Component with a Cart item",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    );
    const cartItem = screen.getByText(/Cart/i);

    //Assertion
    expect(cartItem).toBeInTheDocument();   
});

it("Should render Header Component with a Online status",()=>{
    render(
        <BrowserRouter> 
        <Provider store={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    );
    
    fireEvent.click(screen.getByText(/Online/i));
    
    const onlineStatus = screen.getByText(/Online/i);
    //Assertion
    expect(onlineStatus).toBeInTheDocument();
});
