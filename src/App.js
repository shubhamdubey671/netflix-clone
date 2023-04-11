import React from "react";
import { useEffect, useState } from "react";
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import HomeScreen from "./components/HomeScreen.jsx";
import Loader from "./components/Loader.jsx";
import LoginScreen from "./components/LoginScreen.jsx";

import "./App.css";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4100);
  }, []);


    const user = null 
    // {
    //   name : "shubham",
    // };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Router>
          <Routes>
            {!user ? (
              <Route path="/login"  element  ={ <LoginScreen/>} />
              
            ) : (
              <Route path="/"  element  ={ <div className="App"><HomeScreen /></div>} />
            )}

          </Routes>
        </Router>
        
      )}
    </>
  );
}

export default App;
