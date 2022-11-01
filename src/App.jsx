import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import LandingPage from './components/pages/LandingPage';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './App.css'

function App() {

  useEffect(() => {

    let token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:5000/private/verify", {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else if (res.status == "401") {
            throw new Error("Unauthorized Request. Must be signed in.");
          }
        })
        .then((json) => console.dir(json))
        .catch((err) => console.error(err));
    } else {
      // alert("Not logged in.");
    }
  }, []);


  function getToken() {
    let now = new Date(Date.now()).getTime();
    let threeDays = 1000 * 60 * 30 * 144;
    let timeSinceLastLogin = now - localStorage.getItem("lastLoginTime");
    if (timeSinceLastLogin < threeDays) {
      return localStorage.getItem("token");
    } else {
      localStorage.removeItem("token");
      return null;
    }
  }

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}

export default App
