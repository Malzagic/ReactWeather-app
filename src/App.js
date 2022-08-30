import React from "react";
import Location from "./components/Location";
import { WeatherApiProvider } from "./components/context/WeatherApiContext";
import "bootswatch/dist/morph/bootstrap.min.css";

function App() {
  return (
    <WeatherApiProvider>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid justify-content-center">
          <span className="navbar-brand mb-0 h1 fw-bold">React WeatherApp</span>
        </div>
      </nav>
      <header>
        <Location />
      </header>
    </WeatherApiProvider>
  );
}

export default App;
