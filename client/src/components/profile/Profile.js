import React, { Component } from "react";
import { connect } from "react-redux";
import UserGrade from "./UserGrade";
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
        const { editing } = this.props;
        return (
            <div className="sw-bg-white full-screen">
                <div className="container">
                    <div className="row">
                        <div className="col-3 d-none d-md-block">
                            <UserMenu />
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
    { getUser }
)(Profile);
