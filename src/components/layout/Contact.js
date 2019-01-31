import React, { Component } from "react";
import InputGroup from "./InputGroup";
import Axios from "axios";
export default class Contact extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    content: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { name, email, subject, content } = this.state;
    const data = {
      name,
      email,
      subject,
      content
    };
    this.sendEmail(data);
    this.setState({
      name: "",
      email: "",
      subject: "",
      content: ""
    });
  };

  sendEmail(data) {
    Axios.post("/api/contact", data);
  }

  render() {
    const { name, email, subject, content } = this.state;
    return (
      <section className="sw-bg-white">
        <div className="container">
          <form onSubmit={this.onSubmit}>
            <InputGroup
              label="Name"
              name="name"
              onChange={this.onChange}
              placeholder="enter your name..."
              value={name}
            />
            <InputGroup
              label="Email"
              type="email"
              name="email"
              placeholder="email that you want to be reached..."
              value={email}
              onChange={this.onChange}
            />
            <InputGroup
              label="Subject"
              name="subject"
              value={subject}
              onChange={this.onChange}
            />
            <InputGroup
              label="Content"
              rows="5"
              name="content"
              value={content}
              onChange={this.onChange}
            />
            <button type="submit" className="btn float-right">
              Send
            </button>
          </form>
        </div>
      </section>
    );
  }
}
