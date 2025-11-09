import React, { useState } from "react";
import Header from "../comman/Header";
import Navbar from "../comman/Navbar";
import Footer from "../comman/Footer";

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // 🌈 Page Container (Now wraps Header, Navbar & Footer visually)
  const pageWrapper = {
    fontFamily: "'Poppins', sans-serif",
    background: "linear-gradient(180deg, #e0f7fa, #ffffff)",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflowX: "hidden",
    margin: 0,
    padding: 0,
  };

  // 🧭 Unified Layout Wrappers
  const headerWrapper = {
    width: "100%",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    background: "linear-gradient(90deg, #0077b6, #00b4d8)",
  };

  const navbarWrapper = {
    width: "100%",
    background: "#ffffff",
    borderBottom: "2px solid #00b4d8",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    zIndex: 10,
  };

  const footerWrapper = {
    width: "100%",
    background: "linear-gradient(90deg, #00b4d8, #0077b6)",
    color: "white",
    textAlign: "center",
    padding: "25px 0",
    marginTop: "auto",
    boxShadow: "0 -3px 10px rgba(0,0,0,0.1)",
  };

  // 🩺 Services Section
  const sectionStyle = {
    padding: "120px 5% 60px 5%",
    textAlign: "center",
    width: "100%",
    maxWidth: "1300px",
    boxSizing: "border-box",
  };

  const titleStyle = {
    fontSize: "42px",
    color: "#0077b6",
    fontWeight: "900",
    marginBottom: "20px",
    textTransform: "uppercase",
    letterSpacing: "1.5px",
    textShadow: "2px 2px 8px rgba(0, 119, 182, 0.3)",
  };

  const subtitleStyle = {
    fontSize: "18px",
    color: "#444",
    maxWidth: "850px",
    margin: "0 auto 60px auto",
    lineHeight: "1.8",
  };

  // 🧩 Services Grid
  const servicesGrid = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "stretch",
    gap: "35px",
    width: "100%",
    marginTop: "20px",
  };

  // 💳 Card Styling
  const cardStyle = {
    background: "linear-gradient(145deg, #ffffff, #f0fbff)",
    borderRadius: "20px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
    flex: "1 1 300px",
    maxWidth: "330px",
    padding: "35px 25px",
    textAlign: "center",
    transition: "all 0.4s ease",
    border: "2px solid transparent",
    position: "relative",
    overflow: "hidden",
  };

  const cardHoverEffect = (e, isHover) => {
    e.currentTarget.style.transform = isHover ? "translateY(-10px) scale(1.03)" : "translateY(0) scale(1)";
    e.currentTarget.style.boxShadow = isHover
      ? "0 10px 25px rgba(0, 119, 182, 0.3)"
      : "0 6px 20px rgba(0,0,0,0.1)";
    e.currentTarget.style.border = isHover ? "2px solid #00b4d8" : "2px solid transparent";
  };

  const iconStyle = {
    fontSize: "60px",
    color: "#00b4d8",
    marginBottom: "18px",
    transition: "transform 0.3s ease",
  };

  const serviceTitle = {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#0077b6",
    marginBottom: "10px",
  };

  const serviceDesc = {
    fontSize: "15px",
    color: "#333",
    lineHeight: "1.7",
    marginBottom: "10px",
  };

  // 🪄 Expanded Info Box
  const moreInfoStyle = {
    fontSize: "14px",
    color: "#333",
    background: "rgba(0,180,216,0.1)",
    borderLeft: "5px solid #0077b6",
    borderRadius: "10px",
    padding: "12px",
    marginTop: "15px",
    textAlign: "left",
    lineHeight: "1.6",
    transition: "max-height 0.4s ease, opacity 0.4s ease",
    maxHeight: "500px",
    opacity: 1,
  };

  // 🔘 Button Style
  const buttonStyle = {
    marginTop: "15px",
    padding: "10px 28px",
    backgroundColor: "#00b4d8",
    color: "white",
    border: "none",
    borderRadius: "25px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontSize: "14px",
    letterSpacing: "0.5px",
  };

  const handleHoverButton = (e, isHover) => {
    e.target.style.background = isHover ? "#0077b6" : "#00b4d8";
    e.target.style.transform = isHover ? "scale(1.1)" : "scale(1)";
  };

  // 🧠 Services Data
  const services = [
    {
      icon: "🏥",
      title: "Emergency Care",
      description:
        "24/7 emergency support with advanced facilities and expert doctors ready to handle critical cases.",
      moreInfo:
        "Our Emergency Department operates around the clock with specialized trauma units, advanced ambulances, and rapid response teams ensuring immediate care.",
    },
    {
      icon: "🧬",
      title: "Pathology & Diagnostics",
      description:
        "Accurate lab tests and diagnostics using the latest medical technologies for fast, reliable results.",
      moreInfo:
        "Comprehensive pathology and imaging services with automated equipment and certified professionals ensuring accuracy and trust.",
    },
    {
      icon: "💊",
      title: "Pharmacy",
      description:
        "On-site pharmacy offering authentic, high-quality medicines at affordable prices for all patients.",
      moreInfo:
        "24/7 pharmacy service providing medicines from trusted brands, with pharmacists guiding correct usage and dosage.",
    },
    {
      icon: "👨‍⚕️",
      title: "General Consultation",
      description:
        "Meet our experienced physicians for checkups, diagnosis, and preventive healthcare advice.",
      moreInfo:
        "Our doctors specialize in lifestyle management, chronic disease control, and overall health assessments.",
    },
    {
      icon: "🩺",
      title: "Cardiology",
      description:
        "Comprehensive heart care with cutting-edge equipment and experienced cardiologists.",
      moreInfo:
        "We offer advanced cardiac diagnostics, angioplasty, pacemaker implantation, and personalized cardiac rehabilitation plans.",
    },
    {
      icon: "👶",
      title: "Maternity & Child Care",
      description:
        "Specialized maternity and pediatric services ensuring safety, comfort, and care for every mother and child.",
      moreInfo:
        "From prenatal to postnatal stages — we provide neonatal ICU, pediatric expertise, and emotional support for families.",
    },
  ];

  return (
    <div style={pageWrapper}>
      {/* Unified Header and Navbar */}
      <div style={headerWrapper}>
        <Header />
      </div>
      <div style={navbarWrapper}>
        <Navbar />
      </div>

      {/* Services Section */}
      <section style={sectionStyle}>
        <h1 style={titleStyle}>Our Hospital Services</h1>
        <p style={subtitleStyle}>
          We provide world-class medical care and advanced treatment facilities under one roof — ensuring your
          health, comfort, and happiness every step of the way.
        </p>

        <div style={servicesGrid}>
          {services.map((service, index) => (
            <div
              key={index}
              style={cardStyle}
              onMouseEnter={(e) => cardHoverEffect(e, true)}
              onMouseLeave={(e) => cardHoverEffect(e, false)}
            >
              <div style={iconStyle}>{service.icon}</div>
              <h3 style={serviceTitle}>{service.title}</h3>
              <p style={serviceDesc}>{service.description}</p>

              {expandedIndex === index && <div style={moreInfoStyle}>{service.moreInfo}</div>}

              <button
                style={buttonStyle}
                onClick={() => handleToggle(index)}
                onMouseEnter={(e) => handleHoverButton(e, true)}
                onMouseLeave={(e) => handleHoverButton(e, false)}
              >
                {expandedIndex === index ? "Show Less" : "Learn More"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Unified Footer */}
      <footer style={footerWrapper}>
        <Footer />
      </footer>
    </div>
  );
}
