import React, { Component } from "react";
import $ from "jquery";
import "popper.js";
import "bootstrap/dist/js/bootstrap";
import Services from "./layout/Services";
import About from "./layout/About";
import Login from "./Login";
class Home extends Component {
    state = {
        words: ["Coding Bootcamp", "Web Dvelopment", "Full Stack Development"],
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

        setTimeout(() => {
            this.type();
        }, typeSpeed);
    }

    componentDidMount() {
        this.type();
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
                <button
                    className="btn menu-button"
                    data-toggle="modal"
                    data-target="#loginModal"
                >
                    Login
                </button>
                <button
                    className="btn menu-button"
                    // data-toggle="modal"
                    // data-target="#RegisterModal"
                >
                    Register
                </button>
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
                        className="btn btn-lg btn-outline-light"
                    >
                        Explore
                    </button>
                </header>
                <Services />
                <About />
                <footer className="center">
                    <p>Urban League of Eastern Massachusetts &copy; 2019</p>
                </footer>
                <Login />
            </div>
        );
    }
}

export default Home;
