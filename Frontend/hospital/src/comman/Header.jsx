import React, { useState } from "react";
import logo from "../assets/logo.png"; // ✅ Ensure logo.png exists in src/assets

export default function Header() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // 🌀 Move text slightly based on mouse
  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 25;
    const y = (e.clientY / innerHeight - 0.5) * 25;
    setOffset({ x, y });
  };

  // 🎨 Styles
  const headerContainer = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    background:
      "linear-gradient(120deg, #001f3f, #005f73, #0a9396, #94d2bd, #e9d8a6)",
    backgroundSize: "400% 400%",
    color: "#ffffff",
    padding: "30px 50px",
    boxShadow: "0 6px 25px rgba(0, 0, 0, 0.2)",
    borderBottom: "4px solid rgba(255, 255, 255, 0.3)",
    overflow: "hidden",
    animation: "gradientShift 12s ease infinite",
    cursor: "default",
  };

  const logoContainer = {
    position: "absolute",
    left: "40px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    transition: "transform 0.3s ease, filter 0.3s ease",
  };

  const logoImage = {
    width: "75px",
    height: "75px",
    borderRadius: "50%",
    border: "3px solid rgba(255, 255, 255, 0.8)",
    objectFit: "cover",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
    transition: "transform 0.4s ease, box-shadow 0.4s ease",
  };

  const titleContainer = {
    textAlign: "center",
    transform: `translate(${offset.x}px, ${offset.y}px)`,
    transition: "transform 0.25s ease-out",
  };

  const hospitalName = {
    fontSize: "38px",
    fontWeight: "900",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    margin: 0,
    color: "red", // 🔴 Red heading
    textShadow:
      "0 0 10px rgba(255,0,0,0.8), 0 0 25px rgba(255,0,0,0.6), 0 0 40px rgba(255,0,0,0.4)",
    transition: "transform 0.3s ease, text-shadow 0.3s ease",
  };

  const tagline = {
    fontSize: "18px",
    color: "#f0f9ff",
    marginTop: "10px",
    fontWeight: "500",
    letterSpacing: "0.8px",
    textShadow: "0 0 8px rgba(255, 255, 255, 0.6)",
  };

  const glowRing = {
    position: "absolute",
    top: "-50%",
    left: "-50%",
    width: "200%",
    height: "200%",
    background:
      "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
    pointerEvents: "none",
    animation: "rotateRing 20s linear infinite",
    zIndex: 0,
  };

  const handleHoverLogo = (e, isHover) => {
    e.currentTarget.style.transform = isHover ? "scale(1.15)" : "scale(1)";
    e.currentTarget.style.filter = isHover
      ? "drop-shadow(0 0 12px rgba(255,255,255,0.9))"
      : "none";
  };

  return (
    <header style={headerContainer} onMouseMove={handleMouseMove}>
      {/* ✨ Rotating glow effect */}
      <div style={glowRing}></div>

      {/* 🏥 Logo */}
      <div
        style={logoContainer}
        onMouseEnter={(e) => handleHoverLogo(e, true)}
        onMouseLeave={(e) => handleHoverLogo(e, false)}
      >
        <img src={logo} alt="Hospital Logo" style={logoImage} />
      </div>

      {/* 🩺 Animated Heading */}
      <div style={titleContainer}>
        <h1 style={hospitalName}>The Foundation One Hospital</h1>
        <p style={tagline}>Your Health, Our Priority</p>
      </div>
    </header>
  );
}
