import React from "react";
import SignupForm from "./components/SignupForm";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import About from './pages/About.jsx';
import Analytics from './pages/Analytics.jsx';
import Comment from './pages/Comment.jsx';
import Product from './pages/Product.jsx';
import ProductList from './pages/ProductList.jsx';

const App = () => {
  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<Sidebar>
            <Dashboard />
          </Sidebar>
          } />
          <Route path="/dashboard" element={<Sidebar><Dashboard /></Sidebar>} />
          <Route path="/analytics" element={<Sidebar><Analytics /></Sidebar>} />
          <Route path="/about" element={<Sidebar><About /></Sidebar>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App;
