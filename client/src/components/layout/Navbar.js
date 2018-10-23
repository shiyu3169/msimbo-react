import React from "react";

import Login from "../Login";
import Register from "../Register";

export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark">
                <button
                    routerLink="/user"
                    class="d-lg-none btn sw-bg-transparent sw-white"
                    type="button"
                >
                    <i class="fas fa-user" />
                </button>
                <button
                    class="navbar-toggler"
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon" />
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" routerLink="/">
                                Home
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" routerLink="/students">
                                Students
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" routerLink="/curriculum">
                                Curriculum
                            </a>
                        </li>

                        <li class="nav-item">
                            <a
                                class="nav-link d-lg-none"
                                routerLink="/assignment"
                            >
                                Assignments
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" routerLink="/wiki">
                                Wiki
                            </a>
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                href="https://www.youtube.com/channel/UC9NVYFh1gs3AShriwWX7NNQ"
                                target="_blank"
                            >
                                Videos
                            </a>
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                href="https://msimbo.slack.com"
                                target="_blank"
                            >
                                Slack
                            </a>
                        </li>
                    </ul>
                    <button
                        className="btn menu-button"
                        data-toggle="modal"
                        data-target="#loginModal"
                    >
                        Login
                    </button>
                    <button
                        className="btn menu-button"
                        data-toggle="modal"
                        data-target="#RegisterModal"
                    >
                        Register
                    </button>
                </div>
            </nav>
            <Login />
            <Register />
        </div>
    );
}
