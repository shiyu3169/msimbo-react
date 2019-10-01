import React from "react";

export default () => (
  <div className="text-center pt-5">
    <div
      className="spinner-border"
      style={{ width: "5rem", height: "5rem" }}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);
