import React from "react";
import { useEffect, useState } from "react";
import HomeScreen from "./components/HomeScreen.jsx";
import Loader from "./components/Loader.jsx";

import "./App.css";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4100);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="App">
          <HomeScreen />
        </div>
      )}
    </>
  );
}

export default App;
