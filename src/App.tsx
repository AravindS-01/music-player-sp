import React from 'react';
import './App.css';
import "./globalStyle.css";
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes';

function App() {


  return(<>
    <RouterProvider router={routes} />
  </>);
}

export default App;
