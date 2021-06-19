import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Content from "./Components/Content/Content";
import Content1 from "./Components/Content/Content1";
import Content2 from "./Components/Content/Content2";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Navbar />
        {/* <Content /> */}
        <Route path="/Toyota" render={Content} />
        <Route path="/bmw" component={Content1} />
        <Route path="/tesla" component={Content2} />
      </div>
    </BrowserRouter>
  );
};
export default App;
