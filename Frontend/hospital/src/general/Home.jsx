import React, { useState } from "react";
import Header from "../comman/Header";
import Navbar from "../comman/Navbar";
import Footer from "../comman/Footer";
import Slider from "../Slider";

export default function Home() {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const homeContainer = {
    fontFamily: "'Poppins', sans-serif",
    background: "linear-gradient(180deg, #f5f7fa 0%, #e8f4fa 100%)",
    color: "#333",
    textAlign: "center",
    overflowX: "hidden",
  };

  const sectionStyle = {
    padding: "70px 25px",
    maxWidth: "1200px",
    margin: "0 auto",
    animation: "fadeIn 1s ease-in-out",
  };

  const sectionTitle = {
    fontSize: "36px",
    fontWeight: "800",
    marginBottom: "20px",
    color: "#0077b6",
    textShadow: "0 3px 8px rgba(0, 119, 182, 0.3)",
    letterSpacing: "0.5px",
  };

  const paragraph = {
    fontSize: "18px",
    lineHeight: "1.8",
    color: "#555",
    marginBottom: "50px",
    maxWidth: "900px",
    margin: "0 auto",
  };

  const featuresContainer = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
    marginTop: "40px",
  };

  const card = {
    background: "linear-gradient(145deg, #ffffff, #e3f2fd)",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    transition: "all 0.4s ease",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
  };

  const handleHover = (e, isHover) => {
    e.currentTarget.style.transform = isHover
      ? "translateY(-10px) scale(1.03)"
      : "translateY(0) scale(1)";
    e.currentTarget.style.boxShadow = isHover
      ? "0 15px 35px rgba(0, 183, 255, 0.4)"
      : "0 8px 25px rgba(0,0,0,0.1)";
  };

  const iconStyle = {
    fontSize: "50px",
    color: "#00b4d8",
    marginBottom: "15px",
    transition: "transform 0.4s ease, color 0.4s ease",
  };

  const testimonialsContainer = {
    background: "linear-gradient(135deg, #0077b6, #00b4d8, #48cae4)",
    color: "white",
    padding: "70px 25px",
    borderRadius: "30px",
    margin: "60px auto",
    maxWidth: "1300px",
    boxShadow: "0 10px 30px rgba(0, 119, 182, 0.4)",
    position: "relative",
  };

  const testimonialsContainerInner = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "25px",
    marginTop: "40px",
  };

  const testimonialCard = {
    background: "rgba(255,255,255,0.15)",
    padding: "30px",
    borderRadius: "15px",
    maxWidth: "360px",
    fontStyle: "italic",
    lineHeight: "1.7",
    boxShadow: "0 5px 15px rgba(255,255,255,0.1)",
    backdropFilter: "blur(6px)",
    transition: "all 0.4s ease",
  };

  const glowEffect = {
    position: "absolute",
    top: "-60px",
    right: "-60px",
    width: "160px",
    height: "160px",
    background: "radial-gradient(circle, rgba(255,255,255,0.3), transparent 70%)",
    filter: "blur(70px)",
    animation: "floatGlow 6s ease-in-out infinite alternate",
    borderRadius: "50%",
  };

  const modalOverlay = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    backdropFilter: "blur(4px)",
  };

  const modalContent = {
    background: "white",
    borderRadius: "20px",
    padding: "40px",
    width: "90%",
    maxWidth: "600px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
    textAlign: "left",
    position: "relative",
    animation: "zoomIn 0.5s ease",
  };

  const closeButton = {
    position: "absolute",
    top: "15px",
    right: "20px",
    fontSize: "22px",
    fontWeight: "bold",
    color: "#0077b6",
    border: "none",
    background: "none",
    cursor: "pointer",
  };

  const features = [
    {
      icon: "🩺",
      title: "24/7 Emergency",
      text: "Our doctors and staff are available around the clock to provide immediate and efficient care for all medical emergencies.",
      details:
        "We have state-of-the-art emergency rooms, advanced life-support systems, and a rapid response team. Our ambulance services are equipped with modern medical tools to ensure critical patients receive timely treatment during transit.",
    },
    {
      icon: "💊",
      title: "Pharmacy & Medicines",
      text: "Instant access to prescribed medicines from our in-house pharmacy at affordable prices.",
      details:
        "Our in-house pharmacy operates 24/7 and offers genuine, approved medicines. We maintain real-time inventory and ensure that your prescriptions are fulfilled instantly with proper dosage guidance and expert pharmacist advice.",
    },
    {
      icon: "🏥",
      title: "Modern Infrastructure",
      text: "Our facilities are equipped with the latest medical equipment and diagnostic tools.",
      details:
        "We provide digital X-rays, MRI, CT scans, and advanced surgical suites with robotic assistance. Every department is designed ergonomically for patient comfort and staff efficiency, ensuring a seamless healthcare experience.",
    },
    {
      icon: "👨‍⚕️",
      title: "Expert Doctors",
      text: "Consult highly qualified specialists with years of experience in diverse medical fields.",
      details:
        "Our panel of expert doctors includes specialists from cardiology, neurology, pediatrics, oncology, and more. Each professional is dedicated to evidence-based treatment, compassionate care, and personalized recovery plans.",
    },
  ];

  return (
    <div style={homeContainer}>
      <Header />
      <Navbar />
      <Slider />

      {/* ✅ Welcome Section */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Welcome to The Foundation One Hospital</h2>
        <p style={paragraph}>
          We’re committed to delivering world-class healthcare using cutting-edge technology, expert care,
          and compassion. Whether it’s an emergency or regular checkup — your health is always our top priority.
        </p>

        <div style={featuresContainer}>
          {features.map((item, i) => (
            <div
              key={i}
              style={card}
              onClick={() => setSelectedFeature(item)}
              onMouseEnter={(e) => handleHover(e, true)}
              onMouseLeave={(e) => handleHover(e, false)}
            >
              <div style={iconStyle}>{item.icon}</div>
              <h3 style={{ fontSize: "20px", color: "#0077b6", fontWeight: "700" }}>{item.title}</h3>
              <p style={{ color: "#444", marginTop: "10px", lineHeight: "1.6" }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Modal Popup for Details */}
      {selectedFeature && (
        <div style={modalOverlay} onClick={() => setSelectedFeature(null)}>
          <div style={modalContent} onClick={(e) => e.stopPropagation()}>
            <button style={closeButton} onClick={() => setSelectedFeature(null)}>
              ✖
            </button>
            <h2 style={{ color: "#0077b6" }}>{selectedFeature.title}</h2>
            <p style={{ marginTop: "15px", color: "#444", lineHeight: "1.7", fontSize: "17px" }}>
              {selectedFeature.details}
            </p>
          </div>
        </div>
      )}

      {/* ✅ Testimonials Section */}
      <section style={testimonialsContainer}>
        <div style={glowEffect}></div>
        <h2 style={{ ...sectionTitle, color: "white", textShadow: "0 3px 12px rgba(0,0,0,0.3)" }}>
          What Our Patients Say
        </h2>

        <div style={testimonialsContainerInner}>
          {[
            {
              text: "The doctors were so kind and attentive. My surgery went smoothly, and the post-care was excellent.",
              name: "Raj Kumar",
            },
            {
              text: "Clean facilities, friendly staff, and fast service! Highly recommend their emergency department.",
              name: "Mangesh Singh",
            },
            {
              text: "Booking appointments and getting reports online was so easy — a truly modern hospital experience!",
              name: "Manjeet Yadav",
            },
          ].map((t, i) => (
            <div key={i} style={testimonialCard}>
              “{t.text}”
              <br />
              <br />
              — <strong>{t.name}</strong>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
