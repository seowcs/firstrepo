import axios from 'axios';
import { useState, MouseEvent } from 'react';
import { useNavigate } from 'react-router';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Results from './pages/Results';
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/results",
    element: <Results/>,
  },
]);

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
        
    </div>
  );
}

export default App;
