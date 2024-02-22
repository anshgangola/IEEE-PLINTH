
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Home from './Pages/Home';
import About from "./Pages/About";
import Event from "./Pages/Event";




function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        { path:"/", element: <Home></Home> },
        { path:"/about", element: <About></About> },
        { path:"/events", element: <Event></Event> },
       
      ],
    },
    
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;