import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import LandingPage from './components/pages/LandingPage';
import HomePage from './components/pages/HomePage';
import BookPage from './components/pages/BookPage';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, clearUser, setReadings, setFriends, setPosts, setComments, setPendings, setGenres, setMoods } from './components/state/user';
import './App.css'

function App() {

  const dispatch = useDispatch();
  const user = useSelector((state)=> state.user);
  const navigate = useNavigate();

  const goToUserHome = ()=>{
    navigate("/home");
  }

  const goToLanding = ()=>{
    navigate("/");
  }

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
        .then((data) =>{
          dispatch(setUser(data));
          dispatch(setReadings(data));
          dispatch(setFriends(data));
          dispatch(setPosts(data));
          dispatch(setComments(data));
          dispatch(setPendings(data));
          dispatch(setGenres(data));
          dispatch(setMoods(data));
          console.log(user);
          goToUserHome();
        })
        .catch((err) =>{ 
          console.error(err);
          goToLanding();
        });
    } else {
      // alert("Not logged in.");
      goToLanding();
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
      <Route path="/home" element={<HomePage />} />
      <Route path="/books/:id" element={<BookPage />}/>
    </Routes>
  );
}

export default App
