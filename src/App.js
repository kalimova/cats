import Header from "./components/Header";
import Main from "./pages/Main";
import Basket from "./components/Basket";
import Details from "./components/Details";
import React, {useState}from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./Test";

const App = () => {
  const[details,setDetails]=useState([])
  return (
    <>
      <BrowserRouter>
        <Header />
        <Test/>
        <Routes>
          <Route element={<Main setDetails={setDetails}/>} path="/" />
          <Route element={<Basket />} path="/basket" />
          <Route element={<Details details={details}/>} path="/details" />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
