import React from "react";
import ReactDOM from "react-dom/client";

// import Myprogram from "./component/Program";
//import Layout from "./component/archita/Layout";
import { BrowserRouter} from "react-router-dom";
// import MyProgram from "./component/shashi/Program2";
import Myprogram3 from "./component/shashi/Program3";
// import Home from "./component/neha/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Home /> */}
     <Myprogram3 />
      {/* <Layout /> */}
    </BrowserRouter>
  </React.StrictMode>
);
