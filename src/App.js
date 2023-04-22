import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen.jsx";
import ProfileScreen from "./components/ProfileScreen.jsx";
import Loader from "./components/Loader.jsx";
import LoginScreen from "./components/LoginScreen.jsx";
import { auth } from "./firebase.js";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice.js";

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // console.log(userAuth);
        dispatch(login({
            uid: userAuth.uid,
            email: userAuth.email,
            name : userAuth.displayName,
            photo: userAuth.photoURL,
            emailVerified :userAuth.emailVerified,

        }))
      }
      else{
        dispatch(logout())
      }
    });

    setTimeout(() => {
      setLoading(false);
    }, 4100);

    return unsubscribe;
  }, [dispatch]);

 
  
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Router>
          <Routes>
            {!user ? (
              
              <Route exact path="/" element={<LoginScreen />} /> 
              ) : (
                
                <>
                 
              <Route
                path="/home"
                element={
                  <div className="App">
                    <HomeScreen />
                  </div>
                }
              />
                </>
               
            )}
          <Route exact path="/profile" element={<ProfileScreen />} /> 
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
