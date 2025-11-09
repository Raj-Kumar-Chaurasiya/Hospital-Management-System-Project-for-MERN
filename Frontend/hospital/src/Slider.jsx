import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Import local video
import travelVideo from './assets/video (1).mp4';

export default function VideoPath() {
  return (
    <div
      style={{
        maxWidth: "100%",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        borderRadius: "10px",
        overflow: "hidden",
        position: "relative",
        height: "500px",
      }}
    >
      <video
        src={travelVideo}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Caption overlay */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "8px",
          textAlign: "center",
        }}
      >
        <h3>Welcome to Our The Foundation One Hospital</h3>
        <p>Delivering trusted healthcare services with modern facilities and <br/>experienced doctors — your health is our top priority.</p>
      </div>
    </div>
  );
}
