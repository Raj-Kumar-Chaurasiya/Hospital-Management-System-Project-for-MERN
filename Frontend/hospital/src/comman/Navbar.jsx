import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  // 🎨 Main navbar container
  const navbarStyle = {
    background:
      "linear-gradient(120deg, rgba(0,119,182,0.9), rgba(0,180,216,0.9))",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    padding: "14px 35px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    borderBottom: "2px solid rgba(255, 255, 255, 0.3)",
    transition: "all 0.4s ease",
  };

  // 📋 Navigation list
  const navListStyle = {
    display: "flex",
    listStyleType: "none",
    gap: "35px",
    margin: 0,
    padding: 0,
    flexWrap: "wrap",
  };

  // 🔗 Navigation link
  const navItemStyle = {
    position: "relative",
    color: "#ffffff",
    fontSize: "18px",
    fontWeight: "600",
    textDecoration: "none",
    letterSpacing: "0.6px",
    textTransform: "uppercase",
    transition: "color 0.3s ease, transform 0.3s ease",
  };

  // 🌈 Hover effect handler
  const handleHover = (e, isHover) => {
    if (isHover) {
      e.target.style.color = "#ffd166";
      e.target.style.transform = "scale(1.1)";
      e.target.style.textShadow = "0 0 12px rgba(255, 209, 102, 0.8)";
    } else {
      e.target.style.color = "#ffffff";
      e.target.style.transform = "scale(1)";
      e.target.style.textShadow = "none";
    }
  };

  // 💫 Underline animation (pseudo-element style imitation)
  const underlineStyle = {
    position: "absolute",
    bottom: "-6px",
    left: 0,
    height: "3px",
    width: "0%",
    background: "linear-gradient(90deg, #ffd166, #ff6f61)",
    borderRadius: "2px",
    transition: "width 0.3s ease",
  };

  // 🧠 Handle underline grow effect manually
  const handleUnderline = (e, isHover) => {
    const underline = e.currentTarget.querySelector("span");
    underline.style.width = isHover ? "100%" : "0%";
  };

  return (
    <nav style={navbarStyle}>
      <ul style={navListStyle}>
        {[
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
          { name: "Services", path: "/service" },
          { name: "Contact Us", path: "/contact" },
          { name: "Add Patients", path: "/add-patients" },
          { name: "Enquiry", path: "/enquiry" },
        ].map((item, index) => (
          <li key={index} style={{ position: "relative" }}>
            <Link
              to={item.path}
              style={navItemStyle}
              onMouseEnter={(e) => {
                handleHover(e, true);
                handleUnderline(e, true);
              }}
              onMouseLeave={(e) => {
                handleHover(e, false);
                handleUnderline(e, false);
              }}
            >
              {item.name}
              <span style={underlineStyle}></span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
