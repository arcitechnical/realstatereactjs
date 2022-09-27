import React from "react";
import ReactDOM from "react-dom/client";

//import Myprogram from "./component/Program";
//import Layout from "./component/archita/Layout";
import { BrowserRouter } from "react-router-dom";
//import MyProgram from "./component/shashi/Program2";
import Home from "./component/neha/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Home /> */}
      <MyProgram />
      {/* <Layout /> */}
    </BrowserRouter>
  </React.StrictMode>
);
