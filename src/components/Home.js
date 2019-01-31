import React, { Component } from "react";
import $ from "jquery";
import "popper.js";
import "bootstrap/dist/js/bootstrap";
import Services from "./layout/Services";
import About from "./layout/About";

class Home extends Component {
  state = {
    words: ["Web Development", "Full Stack Dev", "Programming"],
    wordIndex: 0,
    isDeleting: false,
    txt: ""
  };

  type() {
    const { wordIndex, words, isDeleting, txt } = this.state;
    const current = wordIndex % words.length;
    const fullTxt = words[current];

    if (isDeleting) {
      this.setState({
        txt: fullTxt.substring(0, txt.length - 1)
      });
    } else {
      this.setState({
        txt: fullTxt.substring(0, txt.length + 1)
      });
    }

    let typeSpeed = 300;

    if (isDeleting) {
      typeSpeed /= 2;
    }
    if (!isDeleting && txt === fullTxt) {
      typeSpeed = 3000;
      this.setState({
        isDeleting: true
      });
    } else if (isDeleting && txt === "") {
      this.setState({
        isDeleting: false
      });
      this.setState({
        wordIndex: wordIndex + 1
      });
      typeSpeed = 500;
    }

    this.timer = setTimeout(() => {
      this.type();
    }, typeSpeed);
  }

  componentDidMount() {
    this.type();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  scroll() {
    $("html,body").animate(
      {
        scrollTop: $(".services").offset().top
      },
      "slow"
    );
  }

  render() {
    const { txt } = this.state;
    return (
      <div>
        <header className="showcase">
          <div className="content">
            <img src="logo.png" className="logo" alt="MSIMBO" />
            <h1 id="home-h1" className="title">
              MSIMBO <span id="txt">{txt}</span>
            </h1>
            <h2 id="home-h2">Welcome to ULEM Coding Bootcamp</h2>
          </div>
          <button
            onClick={this.scroll}
            className="btn btn-lg btn-outline-light d-none d-md-block">
            Explore
          </button>
        </header>
        <Services />
        <About />
        <footer className="center">
          <p>Urban League of Eastern Massachusetts &copy; 2019 </p>
        </footer>
      </div>
    );
  }
}

export default Home;
