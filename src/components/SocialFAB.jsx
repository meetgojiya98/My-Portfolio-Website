import React from "react";
import { LinkedinOutlined, DownloadOutlined } from "@ant-design/icons";

export default function SocialFAB() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        display: "flex",
        flexDirection: "column",
        gap: 12,
        zIndex: 1000,
      }}
    >
      <a
        href="https://www.linkedin.com/in/meet-gojiya/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: "#2978F0",
          color: "#fff",
          padding: 12,
          borderRadius: "50%",
          fontSize: 24,
          boxShadow: "0 4px 12px rgba(41, 120, 240, 0.5)",
          transition: "transform 0.3s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.15)")}
        onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
        title="LinkedIn"
      >
        <LinkedinOutlined />
      </a>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: "#2978F0",
          color: "#fff",
          padding: 12,
          borderRadius: "50%",
          fontSize: 24,
          boxShadow: "0 4px 12px rgba(41, 120, 240, 0.5)",
          transition: "transform 0.3s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.15)")}
        onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
        title="Download Resume"
      >
        <DownloadOutlined />
      </a>
    </div>
  );
}
