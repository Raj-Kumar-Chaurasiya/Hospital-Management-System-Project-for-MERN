import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const footerStyle = {
    background: "linear-gradient(135deg, #001f3f, #003f7f, #0077b6)",
    color: "white",
    padding: "60px 20px 25px",
    textAlign: "center",
    marginTop: "50px",
    boxShadow: "0 -8px 25px rgba(0, 0, 0, 0.3)",
    position: "relative",
    overflow: "hidden",
    fontFamily: "'Poppins', sans-serif",
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "flex-start",
    gap: "40px",
    marginBottom: "40px",
  };

  const glassColumn = {
    flex: "1 1 250px",
    minWidth: "250px",
    background: "rgba(255, 255, 255, 0.12)",
    padding: "25px",
    borderRadius: "18px",
    boxShadow: "0 5px 25px rgba(0, 0, 0, 0.3)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    transition: "transform 0.4s ease, box-shadow 0.4s ease, background 0.4s ease",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  };

  const handleCardHover = (e, isHover) => {
    e.currentTarget.style.transform = isHover ? "translateY(-10px)" : "translateY(0)";
    e.currentTarget.style.background = isHover
      ? "rgba(255, 255, 255, 0.2)"
      : "rgba(255, 255, 255, 0.12)";
    e.currentTarget.style.boxShadow = isHover
      ? "0 10px 30px rgba(255, 165, 0, 0.4)"
      : "0 5px 25px rgba(0, 0, 0, 0.3)";
  };

  const titleStyle = {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "14px",
    textTransform: "uppercase",
    borderBottom: "3px solid #ffcc00",
    display: "inline-block",
    paddingBottom: "5px",
    letterSpacing: "1px",
    color: "#fff",
    textShadow: "0 0 15px rgba(255, 204, 0, 0.7)",
  };

  const linkStyle = {
    display: "block",
    color: "#e0f7ff",
    textDecoration: "none",
    marginBottom: "10px",
    fontSize: "16px",
    fontWeight: "500",
    transition: "all 0.3s ease",
  };

  const handleHover = (e, isHover) => {
    e.target.style.color = isHover ? "#ffcc00" : "#e0f7ff";
    e.target.style.transform = isHover ? "translateX(8px)" : "translateX(0)";
    e.target.style.textShadow = isHover
      ? "0 0 15px rgba(255, 204, 0, 0.8)"
      : "none";
  };

  const bottomStyle = {
    borderTop: "1px solid rgba(255,255,255,0.25)",
    paddingTop: "20px",
    fontSize: "15px",
    color: "#cce7ff",
    letterSpacing: "0.4px",
  };

  const backgroundGlow = {
    position: "absolute",
    top: "-60px",
    left: "-60px",
    width: "180px",
    height: "180px",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(255,204,0,0.3), rgba(255,204,0,0) 70%)",
    filter: "blur(70px)",
    animation: "moveGlow 6s infinite alternate ease-in-out",
  };

  const backgroundGlow2 = {
    ...backgroundGlow,
    top: "auto",
    left: "auto",
    bottom: "-60px",
    right: "-60px",
    background:
      "radial-gradient(circle, rgba(0,255,255,0.3), rgba(0,255,255,0) 70%)",
  };

  return (
    <footer style={footerStyle}>
      <div style={backgroundGlow}></div>
      <div style={backgroundGlow2}></div>

      <div style={containerStyle}>
        {/* 🏥 Hospital Info */}
        <div
          style={glassColumn}
          onMouseEnter={(e) => handleCardHover(e, true)}
          onMouseLeave={(e) => handleCardHover(e, false)}
        >
          <h3 style={titleStyle}>The Foundation One Hospital</h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#e0f9ff" }}>
            Delivering trusted healthcare with expert care, modern technology,
            and compassion — because your well-being is our top mission.
          </p>
        </div>

        {/* ⚡ Quick Links */}
        <div
          style={glassColumn}
          onMouseEnter={(e) => handleCardHover(e, true)}
          onMouseLeave={(e) => handleCardHover(e, false)}
        >
          <h3 style={titleStyle}>Quick Links</h3>
          {[
            { name: "Home", to: "/" },
            { name: "About Us", to: "/about" },
            { name: "Services", to: "/service" },
            { name: "Contact Us", to: "/contact" },
            { name: "Add Patients", to: "/add-patients" },
            { name: "Enquiry", to: "/enquiry" },
          ].map((link, index) => (
            <Link
              key={index}
              to={link.to}
              style={linkStyle}
              onMouseEnter={(e) => handleHover(e, true)}
              onMouseLeave={(e) => handleHover(e, false)}
            >
              ➤ {link.name}
            </Link>
          ))}
        </div>

        {/* 📞 Contact Info */}
        <div
          style={glassColumn}
          onMouseEnter={(e) => handleCardHover(e, true)}
          onMouseLeave={(e) => handleCardHover(e, false)}
        >
          <h3 style={titleStyle}>Contact</h3>
          <p>📍 123 Health Street, City Hospital Road, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ contact@hospitalms.com</p>
        </div>

        {/* 🌐 Social Media */}
        <div
          style={glassColumn}
          onMouseEnter={(e) => handleCardHover(e, true)}
          onMouseLeave={(e) => handleCardHover(e, false)}
        >
          <h3 style={titleStyle}>Follow Us</h3>
          {[
            { name: "Facebook", url: "https://facebook.com" },
            { name: "Twitter", url: "https://twitter.com" },
            { name: "Instagram", url: "https://instagram.com" },
            { name: "LinkedIn", url: "https://linkedin.com" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
              onMouseEnter={(e) => handleHover(e, true)}
              onMouseLeave={(e) => handleHover(e, false)}
            >
              🌐 {social.name}
            </a>
          ))}
        </div>
      </div>

      {/* 🌙 Bottom Section */}
      <div style={bottomStyle}>
        © {new Date().getFullYear()} <b>Hospital Management System</b>. All rights reserved.
      </div>
    </footer>
  );
}
