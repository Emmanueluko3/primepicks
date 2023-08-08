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

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Home />}></Route>)
);

function App() {
  return (
    <div className="">
      <RouterProvider router={router} />

      {/* <Auths /> */}
    </div>
  );
}

export default App;
