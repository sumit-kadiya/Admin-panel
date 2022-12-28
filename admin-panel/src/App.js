import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/form";
import Home from "./components/home";
import Login from "./components/login";
import Navbar from "./components/navbar";
import PrivateRoute from "./components/PrivateRoute";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/user" element={<UserDetails />} />
        </Route>
        <Route path="/register" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
