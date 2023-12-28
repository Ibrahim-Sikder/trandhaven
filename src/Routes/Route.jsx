import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../Layout/Main";
import Shop from "../pages/Shop/Shop";
import ProductDetails from "../pages/ProductDetail/ProductDetails";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import MyAccount from "../pages/Account/MyAccount/MyAccount";
import Profile from "../Layout/Profile";
import Order from "../pages/Account/Order/Order";


export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/shop',
          element: <Shop/>
        },
        {
          path: '/detail',
          element: <ProductDetails/>
        },
        {
          path: '/cart',
          element: <Cart/>
        },
        {
          path: '/checkout',
          element: <Checkout/>
        },
      ]
    },
    {
      path: 'my-account',
     element: <Profile/>,
     children: [
      {
        path: '/my-account',
        element: <MyAccount/>
      },
      {
        path: 'order',
        element: <Order/>
      }
     ]
    }
  ]);