import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/navbar";
import PrivateRoute from "./components/PrivateRoute";
import UserDetails from "./components/UserDetails";
import UserEducation from "./components/UserEducation";
import { useSelector } from "react-redux";
function App() {
  const data = useSelector((state) => state.user.data);

  useEffect(() => {
    localStorage.setItem("users-adminpanel-redux", JSON.stringify(data));
  }, [data]);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/user" element={<UserDetails />} />
          <Route path="/education" element={<UserEducation />} />
        </Route>
        <Route path="/register" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
