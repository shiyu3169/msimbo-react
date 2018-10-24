import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import $ from "jquery";
import { connect } from "react-redux";
import { loggedIn } from "../../actions/userActions";

class PrivateRoute extends Component {
    componentDidMount() {
        this.props.loggedIn();
    }

    render() {
        const { user, component: Component } = this.props;
        if (user) {
            return <Component {...this.props} />;
        } else {
            $("#loginModal").modal("show");
            return <Redirect to="/" />;
        }
    }
}

const mapStateToProps = state => ({
    user: state.user.user
});

export default connect(
    mapStateToProps,
    { loggedIn }
)(PrivateRoute);
