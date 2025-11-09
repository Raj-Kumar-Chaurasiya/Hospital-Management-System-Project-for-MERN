import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./general/Home";
import AboutUs from "./general/AboutUs";
import Services from "./general/Services";
import ContactUs from "./general/ContactUs";
import AddPatients from "./general/AddPatients";
import Enquiry from "./general/Enquiry";
import ManageEnquiry from "./admin/ManageEnquiry";
import ManagePatients from "./admin/ManagePatients.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/service" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/add-patients" element={<AddPatients />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/admin/manageenquiry" element={<ManageEnquiry/>}/>
        <Route path="/admin/managepatient" element={<ManagePatients/>}/>
      </Routes>
    </Router>
  );
}
