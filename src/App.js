import React, { useState, useEffect } from "react";
import "./App.css";
import Title from "./components/Title.js";
import Explanation from "./components/Explanation.js";
import Image from "./components/Image.js";

const axios = require("axios");

function App() {
  const [nasaData, setNasaData] = useState();

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((res) => {
        setNasaData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(nasaData);
  return (
    <div className="App">
      <Title />
      <Image />
      <Explanation />
    </div>
  );
}

export default App;
