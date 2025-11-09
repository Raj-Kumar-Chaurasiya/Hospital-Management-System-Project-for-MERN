import React, { useState } from "react";
import Header from "../comman/Header";
import Navbar from "../comman/Navbar";
import Footer from "../comman/Footer";

// 🩺 Import Local Images
import doctor1 from "../assets/doctors/doctor1.jpg";
import doctor2 from "../assets/doctors/doctor2.jpg";
import doctor3 from "../assets/doctors/doctor3.jpeg";
import doctor4 from "../assets/doctors/doctor4.jpeg";

export default function AboutUs() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  // 🌈 Page Container
  const aboutContainer = {
    fontFamily: "'Poppins', sans-serif",
    background: "linear-gradient(180deg, #f0f9ff, #ffffff)",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    overflowX: "hidden",
  };

  // 🌟 Section Styles
  const sectionStyle = {
    padding: "60px 20px",
    textAlign: "center",
  };

  const titleStyle = {
    fontSize: "40px",
    color: "#0077b6",
    fontWeight: "900",
    textShadow: "2px 2px 10px rgba(0, 119, 182, 0.3)",
    marginBottom: "25px",
  };

  const subtitleStyle = {
    fontSize: "18px",
    maxWidth: "850px",
    margin: "0 auto",
    color: "#333",
    lineHeight: "1.8",
  };

  const missionSection = {
    background: "linear-gradient(120deg, #caf0f8, #e0f7fa)",
    padding: "60px 20px",
    textAlign: "center",
  };

  const missionTitle = {
    fontSize: "30px",
    color: "#023e8a",
    fontWeight: "bold",
    marginBottom: "20px",
    textTransform: "uppercase",
  };

  const missionText = {
    fontSize: "17px",
    maxWidth: "800px",
    margin: "0 auto",
    lineHeight: "1.7",
    color: "#333",
  };

  // 👩‍⚕️ Team Section
  const teamSection = {
    textAlign: "center",
    padding: "80px 20px",
    background: "linear-gradient(180deg, #ffffff, #e3f2fd)",
  };

  // 🌈 Horizontal Scroll Container
  const teamScrollContainer = {
    display: "flex",
    flexDirection: "row",
    overflowX: "auto",
    scrollBehavior: "smooth",
    gap: "25px",
    padding: "20px",
    marginTop: "40px",
    justifyContent: "flex-start",
    scrollbarWidth: "thin",
  };

  // Hide scrollbar (for Chrome)
  teamScrollContainer["::-webkit-scrollbar"] = {
    height: "8px",
  };

  const card = {
    flex: "0 0 auto", // prevent wrapping
    background: "white",
    borderRadius: "15px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
    width: "260px",
    padding: "20px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  };

  const handleCardHover = (e, isHover) => {
    e.currentTarget.style.transform = isHover
      ? "translateY(-8px) scale(1.05)"
      : "translateY(0) scale(1)";
    e.currentTarget.style.boxShadow = isHover
      ? "0 10px 25px rgba(0,0,0,0.2)"
      : "0 6px 18px rgba(0,0,0,0.1)";
  };

  const imageStyle = {
    width: "100%",
    height: "220px",
    borderRadius: "10px",
    objectFit: "cover",
    marginBottom: "15px",
    transition: "transform 0.4s ease",
  };

  const nameStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#0077b6",
    marginBottom: "5px",
  };

  const roleStyle = {
    fontSize: "15px",
    color: "#555",
    marginBottom: "10px",
  };

  const contactButton = {
    marginTop: "10px",
    padding: "10px 20px",
    background: "linear-gradient(90deg, #00b4d8, #0077b6)",
    color: "white",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background 0.3s ease, transform 0.3s ease",
  };

  const handleHoverButton = (e, isHover) => {
    e.target.style.background = isHover
      ? "linear-gradient(90deg, #0077b6, #023e8a)"
      : "linear-gradient(90deg, #00b4d8, #0077b6)";
    e.target.style.transform = isHover ? "scale(1.1)" : "scale(1)";
  };

  const doctors = [
    {
      name: "Dr. Raj Kumar Chaurasiya",
      role: "Chief Surgeon",
      img: doctor1,
      email: "rajchaurasiya9236@gmail.com",
      phone: "+91 92364 07588",
      bio: "Dr. Raj Kumar is a veteran surgeon with 20+ years of experience in complex surgical procedures and patient recovery care.",
    },
    {
      name: "Dr. Mangesh Singh",
      role: "Pediatric Specialist",
      img: doctor2,
      email: "mangeshsingh630@gmail.com",
      phone: "+91 63064 02592",
      bio: "Dr. Mangesh has been helping children and families with compassionate pediatric care for over a decade.",
    },
    {
      name: "Dr. Manjeet Yadav",
      role: "Cardiologist",
      img: doctor3,
      email: "manjeetyadav735@gmail.com",
      phone: "+91 73551 52021",
      bio: "Dr. Manjeet specializes in heart disease diagnosis and treatment, focusing on preventive cardiology.",
    },
    {
      name: "Dr. Akash Chaurasiya",
      role: "Gynecologist",
      img: doctor4,
      email: "akashchaurasiya872@gmail.com",
      phone: "+91 87260 75283",
      bio: "Dr. Akash provides expert care for women’s health, with a focus on maternal and reproductive wellness.",
    },
  ];

  return (
    <div style={aboutContainer}>
      <Header />
      <Navbar />

      {/* 🏥 About Section */}
      <section style={sectionStyle}>
        <h1 style={titleStyle}>About Our Hospital</h1>
        <p style={subtitleStyle}>
          Welcome to our Hospital Management System, where we combine compassion
          and technology to deliver exceptional medical care.
        </p>
      </section>

      {/* 💡 Mission Section */}
      <section style={missionSection}>
        <h2 style={missionTitle}>Our Mission & Vision</h2>
        <p style={missionText}>
          Our mission is to provide high-quality healthcare services that are
          accessible and affordable for everyone. We envision a future where
          technology and empathy go hand-in-hand to improve lives.
        </p>
      </section>

      {/* 👩‍⚕️ Team Section (HORIZONTAL LINE) */}
      <section style={teamSection}>
        <h2 style={missionTitle}>Meet Our Expert Team</h2>

        {/* 🧭 Horizontal Scroll Container */}
        <div style={teamScrollContainer}>
          {doctors.map((member, index) => (
            <div
              key={index}
              style={card}
              onMouseEnter={(e) => handleCardHover(e, true)}
              onMouseLeave={(e) => handleCardHover(e, false)}
            >
              <img src={member.img} alt={member.name} style={imageStyle} />
              <h3 style={nameStyle}>{member.name}</h3>
              <p style={roleStyle}>{member.role}</p>
              <button
                style={contactButton}
                onMouseEnter={(e) => handleHoverButton(e, true)}
                onMouseLeave={(e) => handleHoverButton(e, false)}
                onClick={() => setSelectedDoctor(member)}
              >
                Contact
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 🖥️ Popup */}
      {selectedDoctor && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
          onClick={() => setSelectedDoctor(null)}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              background: "white",
              borderRadius: "20px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              overflow: "hidden",
              width: "750px",
              height: "400px",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left Image */}
            <div style={{ width: "50%" }}>
              <img
                src={selectedDoctor.img}
                alt={selectedDoctor.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* Right Details */}
            <div
              style={{
                width: "50%",
                padding: "30px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h2 style={{ color: "#0077b6", marginBottom: "10px" }}>
                {selectedDoctor.name}
              </h2>
              <h4 style={{ color: "#00b4d8", marginBottom: "10px" }}>
                {selectedDoctor.role}
              </h4>
              <p style={{ color: "#444", lineHeight: "1.6" }}>
                {selectedDoctor.bio}
              </p>
              <p style={{ color: "#333" }}>
                <strong>Email:</strong> {selectedDoctor.email}
              </p>
              <p style={{ color: "#333" }}>
                <strong>Phone:</strong> {selectedDoctor.phone}
              </p>
              <button
                style={{
                  ...contactButton,
                  width: "150px",
                  alignSelf: "center",
                  background: "linear-gradient(90deg, #0077b6, #023e8a)",
                }}
                onClick={() => setSelectedDoctor(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
