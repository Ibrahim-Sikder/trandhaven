import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../Layout/Main";
import Shop from "../pages/Shop/Shop";
import ProductDetails from "../pages/ProductDetail/ProductDetails";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";


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
  ]);