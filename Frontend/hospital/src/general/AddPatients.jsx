import React, { useState } from "react";
import Header from "../comman/Header";
import Navbar from "../comman/Navbar";
import Footer from "../comman/Footer";

export default function AddPatients() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    contact: "",
    email: "",
    address: "",
    disease: "",
    doctor: "",
    admitDate: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/patients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Patient details saved successfully!");
        console.log("Saved Data:", data);
        setFormData({
          name: "",
          age: "",
          gender: "",
          contact: "",
          email: "",
          address: "",
          disease: "",
          doctor: "",
          admitDate: "",
        });
      } else {
        alert("❌ Failed to save patient details");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("⚠️ Could not connect to backend");
    }
  };

  // 🎨 Inline Styles
  const pageStyle = {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #cce5ff, #e0f7fa)",
    padding: "30px 0",
    fontFamily: "'Poppins', sans-serif",
  };

  const formContainerStyle = {
    maxWidth: "750px",
    margin: "30px auto",
    padding: "35px 45px",
    background: "white",
    borderRadius: "20px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 15px",
    margin: "10px 0",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
    transition: "all 0.3s ease",
  };

  const inputFocusStyle = {
    ...inputStyle,
    border: "1px solid #00b4d8",
    boxShadow: "0 0 5px rgba(0,180,216,0.4)",
  };

  const buttonStyle = {
    width: "100%",
    padding: "14px",
    background: "linear-gradient(90deg, #0077b6, #00b4d8)",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "18px",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "18px",
    transition: "all 0.3s ease",
    letterSpacing: "1px",
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    background: "linear-gradient(90deg, #00b4d8, #0077b6)",
    transform: "scale(1.05)",
  };

  const headingStyle = {
    textAlign: "center",
    color: "#0077b6",
    fontSize: "26px",
    fontWeight: "700",
    marginBottom: "20px",
    textTransform: "uppercase",
    letterSpacing: "1px",
  };

  const labelStyle = {
    fontWeight: "600",
    color: "#0077b6",
    display: "block",
    marginBottom: "6px",
  };

  const [hovered, setHovered] = useState(false);
  const [focusedField, setFocusedField] = useState("");

  return (
    <div style={pageStyle}>
      <Header />
      <Navbar />

      <div
        style={{
          ...formContainerStyle,
          transform: hovered ? "scale(1.02)" : "scale(1)",
          boxShadow: hovered
            ? "0 15px 35px rgba(0,0,0,0.25)"
            : "0 10px 25px rgba(0,0,0,0.2)",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <h2 style={headingStyle}>🩺 Add Patient Details</h2>

        <form onSubmit={handleSubmit}>
          {[
            { label: "Patient Name", name: "name", type: "text" },
            { label: "Age", name: "age", type: "number" },
            { label: "Gender", name: "gender", type: "text" },
            { label: "Contact Number", name: "contact", type: "text" },
            { label: "Email", name: "email", type: "email" },
            { label: "Address", name: "address", type: "text" },
            { label: "Disease", name: "disease", type: "text" },
            { label: "Assigned Doctor", name: "doctor", type: "text" },
            { label: "Admit Date", name: "admitDate", type: "date" },
          ].map((field) => (
            <div key={field.name}>
              <label style={labelStyle}>{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.label}
                value={formData[field.name]}
                onChange={handleChange}
                onFocus={() => setFocusedField(field.name)}
                onBlur={() => setFocusedField("")}
                style={
                  focusedField === field.name ? inputFocusStyle : inputStyle
                }
                required={field.name !== "gender"}
              />
            </div>
          ))}

          <button
            type="submit"
            style={hovered ? buttonHoverStyle : buttonStyle}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            Submit Details
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}
