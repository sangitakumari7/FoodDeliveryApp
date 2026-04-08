import React, { lazy, Suspense, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header.jsx';
import Body from './components/Body.jsx';
import Contact from './components/Contact.jsx';
import Error from './components/Error.jsx'; 
import RestaurantMenu from './components/RestaurantMenu.jsx';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import UserContext from './utils/UserContext';

const Grocery = lazy(() => import('./components/Grocery.jsx'));
const About = lazy(() => import('./components/About.jsx')); 

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Sangeeta Kumari",
    };
    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className='app'>
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
    children:[
      {
        path: '/',
        element: <Body/>
      },
      {
        path: '/about',
        element: 
        <Suspense fallback={<h1>Loading...</h1>}>
            <About/>
          </Suspense>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/grocery',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery/>
          </Suspense>
        )
      },
      {
        path: "/restaurant/:resId",  
        element: <RestaurantMenu/>
      }
    ],
    errorElement: <Error/>
  },
  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter}/>);