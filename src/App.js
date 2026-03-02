import React from 'react';
import ReactDom from 'react-dom/client';
import Header from './components/Header.jsx';
import Body from './components/Body.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Error from './components/Error.jsx'; 
import RestaurantMenu from './components/RestaurantMenu.jsx';
import { createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom';


const AppLayout = () => {
  return (
    <div className='app'>
      <Header/>
      <Outlet/>
    </div>
  )
}


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
        element: <About/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path:"/restaurants/:resId",
        element: <RestaurantMenu/>
      }
    ],
    errorElement: <Error/>
  },
  
]);


const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter}/>);