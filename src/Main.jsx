import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import './style/style.css'
import { BrowserRouter } from "react-router-dom";


ReactDom.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
  <App/>
  </BrowserRouter>
)