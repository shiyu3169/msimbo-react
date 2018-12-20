import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loggedIn } from "../../actions/userActions";

class PrivateRoute extends Component {
    componentWillMount() {
        this.props.loggedIn();
    }

    render() {
        const { user, component: Component } = this.props;
        if (user !== 0) {
            return <Component {...this.props} />;
        } else {
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
