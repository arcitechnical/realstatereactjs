import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./component/archita/Layout";
import { BrowserRouter} from "react-router-dom";


// import Home from "./component/neha/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout /> 
    </BrowserRouter>
  </React.StrictMode>
);
