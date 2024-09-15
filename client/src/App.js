import React from "react";
import Home from "./pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Cart from "./pages/Cart";
import { productsData } from "./api/Api";
import Product from "./Components/Product";
import Login from "./pages/Login";

const Layout = () =>{
  return(
    <div>
      <Header/>
      <ScrollRestoration />
      <Outlet/>
      <Footer />
    </div>
  )
};

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children:[
      {
        path:"/",
        element:<Home />,
        loader:productsData,
      },
      {
        path:"/product/:id",
        element:<Product/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path: "/login",
        element: <Login/>
      }
    ]
  }
])
function App() {
  return (
    <div className="font-bodyFont">
     <RouterProvider router = {router}/>
    </div>
  );
}

export default App;
