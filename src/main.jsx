import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayoutes from './layoutes/MainLayoutes';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import AuthProvider from './AuthProvider/AuthProvider.';
import DashboardLayoutes from './layoutes/DashboardLayoutes';
import PrivateRoute from './Components/Private/PrivateRoute';
import Overview from './Pages/DashboardComponents/Overview/Overview';
// import SellerRoute from './Components/Private/SellerRoute';
import MyProducts from './Pages/DashboardComponents/Overview/Seller/MyProducts';
import AddProduct from './Pages/DashboardComponents/Overview/Seller/AddProduct';
// import AuthProvider from './AuthProvider/AuthProvider.';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayoutes />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/Products",
        element: <Products />
      },
      {
        path: "/About",
        element: <About />
      },
      {
        path: "/Contact-us",
        element: <Contact />
      },
      {
        path: "/Register",
        element: <Register />
      },
      {
        path: "/Login",
        element: <Login />
      },
    ]
  },
  {
    path: "/dashboard",
    element: <PrivateRoute>
      <DashboardLayoutes />
    </PrivateRoute>,
    children: [
      {
        path: "/dashboard/Overview",
        element: <Overview />

      },
      // seller Router
      {
        path: "/dashboard/my-products",
        element: (<PrivateRoute>

          <MyProducts />
        </PrivateRoute>
        )

      },
      {
        path: "/dashboard/add-products",
        element: (
          <AddProduct />
       )

      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>

      <RouterProvider router={router} future={{ v7_skipActionErrorRevalidation: true }} />
    </AuthProvider>

  </StrictMode>
);
