import React from "react";
import { connect } from "react-redux";
import { createResource } from "../../actions/resourceActions";

const ResourceHead = ({ createResource, isAuthenticated, user }) => {
  return (
    <tr>
      <th>Resources</th>
      <th>
        {isAuthenticated && user.admin && (
          <button
            onClick={createResource}
            className="btn btn-outline-primary float-right"
          >
            <i className="fas fa-plus fa-lg" />
          </button>
        )}
      </th>
    </tr>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  { createResource }
)(ResourceHead);
