
import React from "react";
 import { Header } from "../HomePage/Header"; // Header import
// import { Header } from "./Header"

import { Footer } from "../HomePage/Footer";
import "../Style/PrivacyPolicy.css"; // correct import

export const PrivacyPolicy = () => {
  return (
    <>
    <Header/>
      
    

      {/* Main Privacy Content */}
      <div className="policy-container container py-5">
        
        {/* Heading Center + Big */}
        <h2 className="policy-title">Privacy Policy</h2>
        <p className="policy-updated">Last Updated: January 2025</p>

        <p>
          Welcome to <strong>Panch Shakti Films & Studio</strong>. We are committed to 
          protecting your personal information and your right to privacy.
        </p>

        <h4 className="fw-bold mt-4">1. Information We Collect</h4>
        <p>We collect the following types of information when you use our platform:</p>
        <ul>
          <li>✔ Personal Details (Name, Email, Phone Number)</li>
          <li>✔ Profile Details (Age, Gender, Height, Actor/Model Category)</li>
          <li>✔ Uploaded Photos, Videos, Portfolio Content</li>
          <li>✔ Casting Requirements from Agencies / Production Houses</li>
          <li>✔ Login Credentials</li>
          <li>✔ Device Information (IP, Browser Type)</li>
        </ul>

        <h4 className="fw-bold mt-4">2. How We Use Your Information</h4>
        <ul>
          <li>✔ Manage your modelling/acting profile</li>
          <li>✔ Connect you with casting agencies & production houses</li>
          <li>✔ Display your portfolio to verified clients</li>
          <li>✔ Improve platform features & user experience</li>
          <li>✔ Send updates, job alerts & notifications</li>
          <li>✔ Prevent fraud & unauthorized access</li>
        </ul>

        <h4 className="fw-bold mt-4">3. Sharing of Information</h4>
        <p>We may share your profile with:</p>
        <ul>
          <li>✔ Casting Agencies</li>
          <li>✔ Production Houses</li>
          <li>✔ Modeling & Acting Recruiters</li>
        </ul>

        <p><strong>We do not sell</strong> your data to any third party.</p>

        <h4 className="fw-bold mt-4">4. Cookies & Tracking</h4>
        <p>
          Cookies help us improve performance & analyze traffic.  
          You can disable cookies anytime from your browser.
        </p>

        <h4 className="fw-bold mt-4">5. Data Protection</h4>
        <p>
          We use encryption, secure servers & strict access controls
          to protect your data safely.
        </p>

        <h4 className="fw-bold mt-4">6. Your Rights</h4>
        <ul>
          <li>✔ Access your personal data</li>
          <li>✔ Edit/update your profile</li>
          <li>✔ Delete your account anytime</li>
          <li>✔ Request full data removal</li>
        </ul>

        <h4 className="fw-bold mt-4">7. Children’s Privacy</h4>
        <p>
          Users under <strong>13</strong> are not allowed to create accounts 
          without parental consent.
        </p>

        <h4 className="fw-bold mt-4">8. Updates to Policy</h4>
        <p>
          We may update this Privacy Policy occasionally.
          New updates will be posted here.
        </p>

        <h4 className="fw-bold mt-4">9. Contact Us</h4>
        <p>
          📧 <strong>support@panchshaktifilms.com</strong>  
          <br />
          📍 Panch Shakti Films & Studio, India
        </p>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};
