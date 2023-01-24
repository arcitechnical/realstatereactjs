import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./component/project1/Layout";
import { BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout /> 
    </BrowserRouter>
  </React.StrictMode>
);
