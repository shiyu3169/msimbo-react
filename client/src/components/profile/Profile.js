import React, { Component } from "react";
import { connect } from "react-redux";
import UserGrade from "./UserGrade";
import UserMenu from "./UserMenu";
import UserInfo from "./UserInfo";
import UserEdit from "./UserEdit";

class Profile extends Component {
    render() {
        const { editing } = this.props;
        const { match } = this.props;
        return (
            <div className="sw-bg-white full-screen">
                <div className="container">
                    <div className="row">
                        <div className="col-3 d-none d-md-block">
                            <UserMenu match={match} />
                        </div>
                        <div className="col-sm-9">
                            <div id="grade">
                                {editing ? <UserEdit /> : <UserInfo />}
                                <UserGrade />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    editing: state.user.editing
});

export default connect(
    mapStateToProps,
    {}
)(Profile);
