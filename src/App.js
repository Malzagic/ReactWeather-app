import React from "react";
import Layout from './components/Layout/Layout';
import "bootswatch/dist/morph/bootstrap.min.css";

function App() {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid justify-content-center">
          <span className="navbar-brand mx-auto mb-0 h1 fw-bold">React WeatherApp</span>
        </div>
      </nav>
      <main className="mt-5">
        <Layout />
      </main>
    </>
);
}

export default App;
