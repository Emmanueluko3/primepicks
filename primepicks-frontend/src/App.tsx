import React from "react";
import "./App.css";
// import Auths from "./components/templates/auths/auths";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home";
import Explore from "./pages/explore";
import Cart from "./components/organisms/cart/cart";
// import ProductView from "./components/organisms/product/productView";

// const router = createBrowserRouter([
//   createRoutesFromElements(
//     <Route path="/" element={<Home />}>
//       <Route path="/explore" element={<Explore />} />
//     </Route>
//   )
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // loader: rootLoader,
    // children: [
    //   {
    //     path: "team",
    //     element: <ProductView />,
    //     // loader: teamLoader,
    //   },
    // ],
  },
  {
    path: "/explore",
    element: <Explore />,
    // loader: rootLoader,
    // children: [
    //   {
    //     path: "team",
    //     element: <ProductView />,
    //     // loader: teamLoader,
    //   },
    // ],
  },
  {
    path: "/cart",
    element: <Cart />,
    // loader: rootLoader,
    // children: [
    //   {
    //     path: "team",
    //     element: <ProductView />,
    //     // loader: teamLoader,
    //   },
    // ],
  },
]);

function App() {
  return (
    <div className="">
      <RouterProvider router={router} />

      {/* <Auths /> */}
    </div>
  );
}

export default App;
