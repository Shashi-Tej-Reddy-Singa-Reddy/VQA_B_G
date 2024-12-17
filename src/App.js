import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar'; // Import Navbar component
import Login from './components/Login';
import SignUp from './components/SignUp';
import Ask from './components/Ask';
import ProtectedRoute from './components/ProtectedRoute';
import AdminUpload from './components/Extra/AdminUpload';
import './App_1.css';
import Datatable from './components/Extra/DataTable';
import Env_test from './components/Extra/Env_test';
// console.log("start")
function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Render Navbar component */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/SignIn" element={<SignUp />} />
            {/* <Route path='/Ask' element={<Ask/>}/> */}
            {/* <Route path="/Ask" element={<Ask />} /> */}
            {/* <Route path="/Ask" element={<ProtectedRoute element={Ask} />} /> */}
            <Route path="/Ask" element={<Ask/>} />
            <Route path="/AdminUpload" element={<AdminUpload />} />
            <Route path="/Datatable" element={<Datatable />} />
            <Route path="/Env_test" element={<Env_test />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
