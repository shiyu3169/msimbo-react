import React, { Component } from "react";
import InputGroup from "../components/layout/InputGroup";
import Axios from "axios";
export default class Contact extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    content: "",
    error: false,
    success: false
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
  };

  sendEmail(data) {
    Axios.post("/api/contact", data).then(res => {
      this.setState({
        error: false,
        success: true
      });
      this.setState({
        name: "",
        email: "",
        subject: "",
        content: ""
      });
    });
  }

  render() {
    const { name, email, subject, content, error, success } = this.state;
    return (
      <section>
        <div className="container">
          <h1>Contact us</h1>
          {error && (
            <div className="alert alert-danger">
              Something goes wrong, please check your input and try it again.
            </div>
          )}
          {success && (
            <div className="alert alert-success">
              Thank you for your email, we will contact you as soon as possible.
            </div>
          )}
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
