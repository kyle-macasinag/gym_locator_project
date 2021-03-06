// General Imports
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import {CssBaseline, Grid} from "@material-ui/core";

// Pages Imports
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HomePage from "./pages/HomePage/HomePage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import GymList from "./components/GymList/GymList";
import Map from "./components/Map/Map";
// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
// import { getGymsData } from "./api";


function App() {

  // const [gyms, setGyms] = useState([]);

  // const [coordinates, setCoordinates] = useState([]);
  // const [bounds, setBounds] = useState(null);

  // useEffect(() => {
  //   getGymsData()
  //   .then((data) => {
  //       console.log(data);
  //       setGyms(data);
  //   })
  // }, []);


  return (
    <div>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
           </PrivateRoute>
          }
        />
        <Route
        path="/favorites"
        element={
          <PrivateRoute>
            <FavoritesPage/>
          </PrivateRoute>
        }/>

        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
