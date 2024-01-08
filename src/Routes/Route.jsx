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
import Cancel from "../pages/Account/Cancel/Cancel";
import Address from "../pages/Account/Address/Address";
import WishList from "../pages/Wishlist/WishList";
import OrderTracking from "../pages/OrderTracking/OrderTracking";
import Dashboard from "../Layout/Dashboard";
import Category from "../pages/Dashboard/Category/Category";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddProduct from "../pages/Dashboard/AddProduct/AddProduct";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import Payment from "../pages/Dashboard/Payment/Payment";
import ManageItems from "../pages/Dashboard/ManageItem/ManageItems";
import Signup from "../pages/Signup/Signup";
import BusinessAccount from "../pages/Signup/BusinessAccount";
import Login from "../pages/Login/Login";
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
        {
          path: '/wishlist',
          element: <WishList/>
        },
        {
          path: '/tracking-order',
          element: <OrderTracking/>
        },
        {
          path: '/signup',
          element: <Signup/>
        },
        {
          path: '/register',
          element: <BusinessAccount/>
        },
        {
          path: '/login',
          element: <Login/>
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
      },
      {
        path: 'cancel',
        element: <Cancel/>
      },
      {
        path: 'address',
        element: <Address/>
      },
     ]
    },
    {
      path: '/dashboard',
     element: <Dashboard/>,
     children: [
      {
        path: '/dashboard',
        element: <Category/>
      },
      {
        path: 'allusers',
        element: <AllUsers/>
      },
      {
        path: 'addproduct',
        element: <AddProduct/>
      },
      {
        path: 'mycart',
        element: <MyCart/>
      },
      {
        path: 'payment',
        element: <Payment/>
      },
      {
        path: 'manageitems',
        element: <ManageItems/>
      },
     ]
    }
  ]);