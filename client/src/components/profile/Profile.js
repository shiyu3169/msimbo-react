import React, { Component } from "react";
import { connect } from "react-redux";
import Grades from "../grades/Grades";
import UserMenu from "./UserMenu";
import UserInfo from "./UserInfo";
import UserEdit from "./UserEdit";
import { getUser } from "../../actions/userActions";

class Profile extends Component {
    componentDidMount() {
        const { getUser } = this.props;
        const { uid } = this.props.match.params;
        getUser(uid);
    }

    componentWillReceiveProps(nextProps) {
        const { getUser } = this.props;
        if (nextProps.match.params.uid !== this.props.match.params.uid) {
            const uid = nextProps.match.params.uid;
            getUser(uid);
        }
    }

    render() {
        const { editing, currentUser, profile } = this.props;
        return (
            <div className="sw-bg-white full-screen">
                <div className="container">
                    <div className="row">
                        <div className="col-3 d-none d-md-block">
                            <UserMenu />
                        </div>
                        <div className="col-sm-9">
                            <div>
                                {editing ? <UserEdit /> : <UserInfo />}
                                {(currentUser._id === profile._id ||
                                    currentUser.admin) && <Grades />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    editing: state.user.editing,
    currentUser: state.user.currentUser,
    profile: state.user.profile
});

export default connect(
    mapStateToProps,
    { getUser }
)(Profile);
