import React from "react";
import InputGroup from "./InputGroup";
export default function Contact() {
  return (
    <div className="sw-bg-white">
      <div className="container">
        <form>
          <InputGroup label="Name" placeholder="enter your name..." />
          <InputGroup
            label="Email"
            type="email"
            placeholder="email that you want to be reached..."
          />
          <InputGroup label="Subject" />
          <InputGroup label="Content" rows="5" />
          <button className="btn">Clear</button>
          <button className="btn float-right">Send</button>
        </form>
      </div>
    </div>
  );
}
