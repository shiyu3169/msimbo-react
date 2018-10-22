import React, { Component } from "react";
import $ from "jquery";

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
                <section className="services">
                    <div className="container grid-3 center">
                        <div>
                            <i className="fas fa-users fa-3x" />
                            <h3>Students</h3>
                            <p>Students list</p>
                        </div>
                        <div>
                            <i className="fas fa-graduation-cap fa-3x" />
                            <h3>Curriculum</h3>
                            <p>Course Schedule</p>
                        </div>
                        <div>
                            <i className="fab fa-youtube fa-3x" />
                            <h3>Videos</h3>
                            <p>Class Videos on Youtube</p>
                        </div>
                    </div>
                </section>
                <section className="services">
                    <div className="container grid-3 center">
                        <div>
                            <i className="fas fa-pencil-ruler fa-3x" />
                            <h3>Assignments</h3>
                            <p>Student Assignments</p>
                        </div>
                        <div>
                            <i className="fas fa-archive fa-3x" />
                            <h3>Resources</h3>
                            <p>Course slides and materials</p>
                        </div>
                        <div>
                            <i className="fab fa-slack fa-3x" />
                            <h3>Slack</h3>
                            <p>Contact instructor or students</p>
                        </div>
                    </div>
                </section>
                <section className="about">
                    <div className="container">
                        <div className="grid-2">
                            <div className="center">
                                <i className="fas fa-laptop-code fa-5x" />
                            </div>
                            <div>
                                <h3>About Us</h3>
                                <p>
                                    Msimbo means “code” in Swahili. A twenty
                                    (20) week program for displaced, unemployed
                                    and underemployed workers interested
                                    becoming computer programmers. This programs
                                    seeks to address the IT industries’ issue of
                                    diversity and skilled workers. ULEM looks to
                                    enroll 18 students and provide a stipend for
                                    $100/ week. MSIMBO bootcamp trains talented,
                                    low-income individuals to become full-stack
                                    web developers and launch a new career.
                                    Students are trained in web development,
                                    effective business communication, and
                                    leadership. We will conduct a 20 weeks of
                                    120 hours coding technology training program
                                    and the professional development for ULEM’s
                                    MSIMBO program.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="center">
                    <p>Urban League of Eastern Massachusetts &copy; 2019</p>
                </footer>
            </div>
        );
    }
}

export default Home;
