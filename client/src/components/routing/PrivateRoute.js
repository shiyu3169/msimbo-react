import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alertActions";

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  loading,
  setAlert,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (!isAuthenticated && !loading) {
          setAlert("Please sign in first", "warning");
          return <Redirect to="/" />;
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading
});

export default connect(
  mapStateToProps,
  { setAlert }
)(PrivateRoute);
