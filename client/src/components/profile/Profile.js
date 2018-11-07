import React, { Component } from "react";
import { connect } from "react-redux";
import UserImage from "./UserImage";
import UserInfo from "./UserInfo";
import UserBio from "./UserBio";
import UserLink from "./UserLink";
import UserGrade from "./UserGrade";
import $ from "jquery";

class Profile extends Component {
    scroll = (id, e) => {
        $("html,body").animate({
            scrollTop: $(id).offset().top
        });
    };

    render() {
        return (
            <div className="sw-bg-white full-screen">
                <div className="container">
                    <div className="row">
                        <div className="col-3 d-none d-md-block">
                            <ul className="list-group-flush fixed">
                                <li
                                    onClick={this.scroll.bind(this, "#info")}
                                    className="list-group-item list-group-item-action pointer"
                                >
                                    Info
                                </li>
                                <li
                                    onClick={this.scroll.bind(this, "#bio")}
                                    className="list-group-item list-group-item-action pointer"
                                >
                                    Biography
                                </li>
                                <li
                                    onClick={this.scroll.bind(this, "#links")}
                                    className="list-group-item list-group-item-action pointer"
                                >
                                    Links
                                </li>
                                <li
                                    onClick={this.scroll.bind(this, "#grade")}
                                    className="list-group-item list-group-item-action pointer"
                                >
                                    Grade
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-9">
                            <div className="row" id="info">
                                <div className="col-sm-5">
                                    <UserImage />
                                </div>
                                <div className="col-sm-7">
                                    <br />
                                    <UserInfo />
                                </div>
                            </div>
                            <br />
                            <div id="bio">
                                <UserBio />
                            </div>
                            <br />
                            <div id="links">
                                <UserLink />
                            </div>
                            <div id="grade">
                                <UserGrade />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    null,
    {}
)(Profile);
