import React , {lazy, Suspense} from 'react';
import ReactDom from 'react-dom/client';
import Header from './components/Header.jsx';
import Body from './components/Body.jsx';
import Contact from './components/Contact.jsx';
import Error from './components/Error.jsx'; 
import RestaurantMenu from './components/RestaurantMenu.jsx';
import { createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom';


const Grocery = lazy(() => import('./components/Grocery.jsx'));

const About = lazy(() => import('./components/About.jsx')); 

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


const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter}/>);