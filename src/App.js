import React from "react";
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WeatherApiProvider } from "./components/context/WeatherApiContext";
import Layout from './components/Layout/Layout';
import NotFound from './components/Layout/NotFound';
import "bootswatch/dist/morph/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
    <WeatherApiProvider>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid justify-content-center">
            <span className="navbar-brand mx-auto mb-0 h1 fw-bold">React WeatherApp</span>
          </div>
        </nav>
        <main className="mt-5">
          <Routes>
            <Route path='/' element={<Layout />} />
            <Route path='/not-found' element={<NotFound />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
          <ToastContainer />
        </main>
    </WeatherApiProvider>
    </Router>
);
}

export default App;
