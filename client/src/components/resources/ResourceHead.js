import React, { Component } from "react";
import { connect } from "react-redux";
import { createResource } from "../../actions/resourceActions";
class ResourceHead extends Component {
    render() {
        const { createResource, currentUser } = this.props;
        return (
            <tr>
                <th>Resources</th>
                <th>
                    {currentUser.admin && (
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
    }
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(
    mapStateToProps,
    { createResource }
)(ResourceHead);
