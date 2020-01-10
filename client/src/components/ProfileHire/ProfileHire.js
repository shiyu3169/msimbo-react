import React from "react";
import "./ProfileHire.scss";
import { Link } from "react-router-dom";

const ProfileHire = () => {
  return (
    <div className="profile-hire">
      <h5>Start Hiring Now</h5>
      <div>Connect with this and other in-demand MSIMBO alumni</div>
      <Link to="/contact">Contact Us</Link>
    </div>
  );
};

export default ProfileHire;
