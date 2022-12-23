import axios from "axios";
import { useState, MouseEvent } from "react";
import { useNavigate } from "react-router";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";
import Records from "./pages/Records";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Single from "./pages/Single";
import All from "./pages/All";


import "./App.scss";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    parsley: "#5a9f4d",
    royalBlue: "#4169e1",
  },

  bg: {
    parsley: "#5a9f4d",
    royalBlue: "#4169e1",
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/results",
    element: <Results />,
  },
  {
    path: "/records",
    element: <Records />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/records/:id",
    element: <Single />,
  },
  {
    path:'/records/all',
    element:<All/>
  }
]);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </ChakraProvider>
  );
}

export default App;
