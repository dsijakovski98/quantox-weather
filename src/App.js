import React from "react";
import Header from "./components/Header";
import WeatherSectionContainer from "./components/WeatherSection/WeatherSectionContainer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <WeatherSectionContainer />
    </div>
  );
}

export default App;
