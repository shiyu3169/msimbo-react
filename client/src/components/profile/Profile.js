import React, { Component } from "react";
import { connect } from "react-redux";
import UserImage from "./UserImage";
import UserInfo from "./UserInfo";
import UserBio from "./UserBio";
import UserLink from "./UserLink";
import UserGrade from "./UserGrade";

class Profile extends Component {
    render() {
        return (
            <div className="sw-bg-white">
                <br />
                <div className="row container-fluid">
                    <div className="col-sm-3">
                        <UserImage />
                        <br />
                        <UserInfo />
                    </div>
                    <div className="col-sm-9">
                        <UserBio />
                        <br />
                        <br />
                        <UserLink />
                        <br />
                        <UserGrade />
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
