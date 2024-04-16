import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './home/home';
import Login, {Register} from "./login/login";
import {BrowserRouter, Route, Routes} from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
