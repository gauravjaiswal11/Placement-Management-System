import React from "react";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import About from "./Component/About";
import Service from "./Component/Service";
import Portfolio from "./Component/Portfolio";
import Contact from "./Component/Contact";
import Login from "./Component/Login";
import Register from "./Component/Register";
import "./css/login.css";
// import Admin from "./Component/Admin/admin";
import Student from "./Component/Student/student";
import JobApplication from "./Component/Student/JobApplication"
import PlacemetRecord from "./Component/Student/PlacementRecord"
import DownloadRecord from "./Component/Student/DownloadRecord"

import Company from "./Component/Student/Company";
// import Coordinator from "./Component/Co-ordinator/coordinator";
import Faculty from "./Component/Faculty/Teacher";
import Company1 from "./Component/Faculty/Company";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Home />
                <About />
                <Service />
                <Portfolio />
                <Contact />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/admin" element={<Admin />} /> */}

          <Route path="/student" element={<Student />} />
          <Route path="/jobApplication" element={<JobApplication />} />
          <Route path="/placementRecord" element={<PlacemetRecord />} />
          <Route path="/downloadRecord" element={<DownloadRecord />} />
          <Route path="/company" element={<Company />} />

          {/* <Route path="/coordinator" element={<Coordinator />} /> */}
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/company1" element={<Company1 />} />
        </Routes>
        {/* <ToastContainer />  */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
