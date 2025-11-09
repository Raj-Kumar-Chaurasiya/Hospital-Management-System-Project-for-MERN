import React from "react";
import Header from "../comman/Header";
import Navbar from "../comman/Navbar";
import Footer from "../comman/Footer";

export default function ContactUs() {
  const pageStyle = {
    fontFamily: "'Poppins', sans-serif",
    background: "linear-gradient(180deg, #e0f7fa, #ffffff)",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflowX: "hidden",
    width: "100%",
  };

  const sectionStyle = {
    marginTop: "120px",
    padding: "70px 20px",
    width: "100%",
    textAlign: "center",
  };

  const titleStyle = {
    fontSize: "42px",
    color: "#0077b6",
    fontWeight: "900",
    marginBottom: "15px",
    textTransform: "uppercase",
    letterSpacing: "1.5px",
    textShadow: "2px 2px 10px rgba(0, 119, 182, 0.25)",
    transition: "transform 0.3s ease",
  };

  const subtitleStyle = {
    fontSize: "18px",
    color: "#444",
    maxWidth: "750px",
    margin: "0 auto 50px auto",
    lineHeight: "1.8",
  };

  const contactContainer = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
    marginTop: "40px",
  };

  const infoBox = {
    background: "linear-gradient(135deg, #0077b6, #00b4d8)",
    color: "white",
    borderRadius: "20px",
    padding: "35px 25px",
    width: "300px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
    transition: "all 0.4s ease",
    cursor: "pointer",
    backdropFilter: "blur(6px)",
  };

  const iconStyle = {
    fontSize: "50px",
    marginBottom: "15px",
  };

  const infoTitle = {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "10px",
    letterSpacing: "0.5px",
  };

  const infoText = {
    fontSize: "16px",
    lineHeight: "1.7",
  };

  const formContainer = {
    marginTop: "70px",
    display: "flex",
    justifyContent: "center",
    width: "100%",
  };

  const formStyle = {
    background: "rgba(255, 255, 255, 0.95)",
    borderRadius: "20px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    padding: "40px 35px",
    width: "400px",
    transition: "all 0.4s ease",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 15px",
    margin: "12px 0",
    border: "2px solid #ccc",
    borderRadius: "10px",
    fontSize: "16px",
    outline: "none",
    transition: "all 0.3s ease",
  };

  const buttonStyle = {
    width: "100%",
    background: "linear-gradient(135deg, #0077b6, #00b4d8)",
    color: "white",
    border: "none",
    padding: "14px",
    borderRadius: "30px",
    fontWeight: "bold",
    fontSize: "16px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(0,119,182,0.3)",
    letterSpacing: "0.8px",
  };

  const mapStyle = {
    borderRadius: "20px",
    width: "90%",
    maxWidth: "900px",
    height: "350px",
    marginTop: "70px",
    marginBottom: "70px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
  };

  // --- Hover & Focus Effects ---
  const handleHoverBox = (e, isHover) => {
    e.currentTarget.style.transform = isHover
      ? "translateY(-10px) scale(1.05)"
      : "translateY(0) scale(1)";
    e.currentTarget.style.boxShadow = isHover
      ? "0 12px 30px rgba(0, 180, 216, 0.4)"
      : "0 8px 25px rgba(0,0,0,0.2)";
  };

  const handleFocusInput = (e, isFocus) => {
    e.target.style.border = isFocus ? "2px solid #00b4d8" : "2px solid #ccc";
    e.target.style.boxShadow = isFocus
      ? "0 0 8px rgba(0,180,216,0.3)"
      : "none";
  };

  const handleHoverButton = (e, isHover) => {
    e.target.style.background = isHover
      ? "linear-gradient(135deg, #00b4d8, #0077b6)"
      : "linear-gradient(135deg, #0077b6, #00b4d8)";
    e.target.style.transform = isHover ? "scale(1.05)" : "scale(1)";
  };

  // --- Form Submit Logic ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        alert("✅ Message sent successfully!");
        e.target.reset();
      } else {
        alert("❌ Failed: " + data.message);
      }
    } catch {
      alert("⚠️ Unable to connect to server.");
    }
  };

  return (
    <div style={pageStyle}>
      {/* Keep Header and Navbar full-width */}
      <div style={{ width: "100%", zIndex: "10" }}>
        <Header />
        <Navbar />
      </div>

      <section style={sectionStyle}>
        <h1
          style={titleStyle}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          Contact Us
        </h1>

        <p style={subtitleStyle}>
          Have questions or need to reach out? Our team is always ready to help
          you. Contact us using the form below or visit our hospital anytime.
        </p>

        {/* 📍 Contact Info Boxes */}
        <div style={contactContainer}>
          {[
            {
              icon: "📍",
              title: "Address",
              text: "123 Health Street, City Hospital Road, New Delhi, India",
            },
            { icon: "📞", title: "Phone", text: "+91 98765 43210" },
            { icon: "✉️", title: "Email", text: "contact@hospitalms.com" },
          ].map((info, index) => (
            <div
              key={index}
              style={infoBox}
              onMouseEnter={(e) => handleHoverBox(e, true)}
              onMouseLeave={(e) => handleHoverBox(e, false)}
            >
              <div style={iconStyle}>{info.icon}</div>
              <div style={infoTitle}>{info.title}</div>
              <div style={infoText}>{info.text}</div>
            </div>
          ))}
        </div>

        {/* 📝 Contact Form */}
        <div style={formContainer}>
          <form style={formStyle} onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              style={inputStyle}
              onFocus={(e) => handleFocusInput(e, true)}
              onBlur={(e) => handleFocusInput(e, false)}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              style={inputStyle}
              onFocus={(e) => handleFocusInput(e, true)}
              onBlur={(e) => handleFocusInput(e, false)}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              style={inputStyle}
              onFocus={(e) => handleFocusInput(e, true)}
              onBlur={(e) => handleFocusInput(e, false)}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              style={{ ...inputStyle, height: "120px", resize: "none" }}
              onFocus={(e) => handleFocusInput(e, true)}
              onBlur={(e) => handleFocusInput(e, false)}
              required
            ></textarea>

            <button
              type="submit"
              style={buttonStyle}
              onMouseEnter={(e) => handleHoverButton(e, true)}
              onMouseLeave={(e) => handleHoverButton(e, false)}
            >
              Send Message
            </button>
          </form>
        </div>

        {/* 🌍 Google Map */}
        <iframe
          title="Hospital Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.79302125368!2d77.06889926953666!3d28.52728034325613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2b5e6b8f2e1%3A0x4b7efb7a4a3b45e7!2sAIIMS%20Hospital!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          style={mapStyle}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      <Footer />
    </div>
  );
}
