import {
    BrowserRouter as Router,
    
  } from "react-router-dom";

import { Routes } from './Routes';


export const App = () => {
  return (
    <div>
      <Router>
          <Routes />
      </Router>


    </div>
  );
}