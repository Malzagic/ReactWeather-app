import React from "react";
import { WeatherApiProvider } from "./components/context/WeatherApiContext";
import Layout from './components/Layout/Layout';
import "bootswatch/dist/morph/bootstrap.min.css";

function App() {
  return (
    <WeatherApiProvider>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid justify-content-center">
          <span className="navbar-brand mx-auto mb-0 h1 fw-bold">React WeatherApp</span>
        </div>
      </nav>
      <main className="mt-5">
        <Layout />
      </main>
    </WeatherApiProvider>
);
}

export default App;
