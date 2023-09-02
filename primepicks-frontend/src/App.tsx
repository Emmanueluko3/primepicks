import React from "react";
import "./App.css";
import Auths from "./components/templates/auths/auths";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Explore from "./pages/explore";
import Cart from "./components/organisms/cart/cart";
import Checkout from "./components/organisms/cart/checkout";
import CreateListing from "./components/organisms/product/createListing";
import Profile from "./components/organisms/userProfile/profile";
import { useAppContext } from "./context/auth";
import ProductView from "./components/organisms/product/productView";

const ProtectedRoute: React.FC<{ element: React.ReactNode }> = ({
  element,
}: any) => {
  const { registered } = useAppContext();
  if (!registered) {
    return <Auths />;
  }

  return <>{element}</>;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/create",
    element: <ProtectedRoute element={<CreateListing />} />,
  },
  {
    path: "/explore",
    element: <Explore />,
  },
  {
    path: "/explore/:id",
    element: <Explore />,
  },
  {
    path: "/profile",
    element: <ProtectedRoute element={<Profile />} />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <ProtectedRoute element={<Checkout />} />,
  },
]);

function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
