import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Info from "./Components/Info";
import RegForm from "./Components/RegForm";
import NotFound from "./Components/NotFound";
import AboutUs from "./Components/AboutUs";
import Layout from "./Layout";
import Home from "./Components/Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/form" element={<RegForm />} />
            {/* <Route path="/" element={<RegFormClass />} /> */}
            <Route path="/info" element={<Info />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
