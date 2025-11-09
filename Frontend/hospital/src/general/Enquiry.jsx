import React, { useState } from "react";
import Header from "../comman/Header";
import Navbar from "../comman/Navbar";
import Footer from "../comman/Footer";

export default function Enquiry() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [hovered, setHovered] = useState(false);
  const [focusedField, setFocusedField] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const response = await fetch("http://localhost:5000/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("✅ Thank you! Your enquiry has been submitted successfully.");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus("❌ Failed to submit enquiry.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("⚠️ Could not connect to the backend.");
    }
  };

  // 🎨 Inline Styles
  const sectionStyle = {
    background: "linear-gradient(135deg, #caf0f8, #ade8f4, #90e0ef, #48cae4)",
    backgroundSize: "400% 400%",
    animation: "gradientBG 10s ease infinite",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "60px 20px",
    fontFamily: "'Poppins', sans-serif",
  };

  const keyframes = `
    @keyframes gradientBG {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `;

  const formContainer = {
    background: "white",
    boxShadow: hovered
      ? "0 10px 25px rgba(0, 0, 0, 0.25)"
      : "0 5px 20px rgba(0,0,0,0.15)",
    borderRadius: "20px",
    padding: "40px 50px",
    width: "100%",
    maxWidth: "650px",
    marginTop: "40px",
    transition: "all 0.3s ease",
    transform: hovered ? "scale(1.03)" : "scale(1)",
  };

  const titleStyle = {
    fontSize: "30px",
    fontWeight: "700",
    color: "#0077b6",
    textAlign: "center",
    marginBottom: "25px",
    textTransform: "uppercase",
    letterSpacing: "1px",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "8px",
    fontWeight: "600",
    fontSize: "16px",
    color: "#0077b6",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 15px",
    marginBottom: "20px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "15px",
    transition: "all 0.3s ease",
  };

  const inputFocusStyle = {
    ...inputStyle,
    border: "1px solid #00b4d8",
    boxShadow: "0 0 8px rgba(0,180,216,0.4)",
  };

  const textareaStyle = {
    ...inputStyle,
    height: "120px",
    resize: "none",
  };

  const buttonStyle = {
    background: "linear-gradient(90deg, #0077b6, #00b4d8)",
    color: "white",
    border: "none",
    padding: "14px 25px",
    fontSize: "17px",
    fontWeight: "bold",
    borderRadius: "10px",
    cursor: "pointer",
    width: "100%",
    marginTop: "5px",
    letterSpacing: "1px",
    boxShadow: "0 4px 15px rgba(0, 119, 182, 0.4)",
    transition: "all 0.3s ease",
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    background: "linear-gradient(90deg, #00b4d8, #0077b6)",
    transform: "scale(1.05)",
    boxShadow: "0 6px 18px rgba(0, 180, 216, 0.6)",
  };

  const statusStyle = {
    textAlign: "center",
    marginTop: "20px",
    fontWeight: "600",
    color:
      status.includes("✅") ? "green" : status.includes("❌") ? "red" : "#0077b6",
  };

  return (
    <div>
      {/* 🌈 Keyframes added dynamically */}
      <style>{keyframes}</style>

      <Header />
      <Navbar />

      <section style={sectionStyle}>
        <h2 style={titleStyle}>📩 Enquiry Form</h2>

        <div
          style={formContainer}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <form onSubmit={handleSubmit}>
            {[
              { label: "Full Name", name: "name", type: "text" },
              { label: "Email", name: "email", type: "email" },
              { label: "Phone Number", name: "phone", type: "tel" },
              { label: "Subject", name: "subject", type: "text" },
            ].map((field) => (
              <div key={field.name}>
                <label style={labelStyle}>{field.label}</label>
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={`Enter your ${field.label.toLowerCase()}`}
                  style={
                    focusedField === field.name ? inputFocusStyle : inputStyle
                  }
                  value={formData[field.name]}
                  onChange={handleChange}
                  onFocus={() => setFocusedField(field.name)}
                  onBlur={() => setFocusedField("")}
                  required
                />
              </div>
            ))}

            <label style={labelStyle}>Message</label>
            <textarea
              name="message"
              placeholder="Write your message..."
              style={
                focusedField === "message" ? inputFocusStyle : textareaStyle
              }
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField("")}
              required
            ></textarea>

            <button
              type="submit"
              style={hovered ? buttonHoverStyle : buttonStyle}
            >
              Submit Enquiry
            </button>
          </form>

          {status && <p style={statusStyle}>{status}</p>}
        </div>
      </section>

      <Footer />
    </div>
  );
}
