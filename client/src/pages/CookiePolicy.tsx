// src/pages/CookiePolicy.tsx
import React from "react";

const CookiePolicy = () => {
  return (
    <div style={{ maxWidth: 800, margin: "auto", padding: "2rem" }}>
      <h1>Cookie Policy</h1>
      <p>
        Our website uses cookies and similar technologies to provide essential
        features and enable integrations with third-party services.
      </p>

      <h2>What Are Cookies?</h2>
      <p>
        Cookies are small text files stored on your device when you visit a
        website. They help remember your actions and preferences to improve your
        experience.
      </p>

      <h2>Types of Cookies We Use</h2>
      <ul>
        <li>
          <strong>Essential Cookies:</strong> These cookies are necessary for
          core functions such as securely managing your login session. We use
          HTTP-only cookies to store authentication tokens.
        </li>
        <li>
          <strong>Third-Party Cookies:</strong> Our site integrates with
          services like Google Calendar and Zoom, which may set cookies or
          similar technologies when you use related features.
        </li>
      </ul>

      <h2>How We Use Cookies</h2>
      <ul>
        <li>To authenticate users and maintain sessions.</li>
        <li>To enable features provided by integrated third-party services.</li>
      </ul>

      <h2>Managing Cookies</h2>
      <p>
        You can manage or delete cookies through your browser settings.
        Disabling cookies may affect your ability to use certain features on our
        site.
      </p>
    </div>
  );
};

export default CookiePolicy;
