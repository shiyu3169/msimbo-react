import React, { Component } from "react";
import { connect } from "react-redux";
import { editResource } from "../../actions/resourceActions";

class ResourceInfo extends Component {
    onEdit = id => {
        this.props.editResource(id);
    };

    render() {
        const { resource, currentUser } = this.props;
        return (
            <tr>
                <td>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={resource.src}
                    >
                        {resource.name}
                    </a>
                </td>
                <td>
                    <div className="float-right">
                        {currentUser.admin && (
                            <button
                                className="btn btn-outline-warning"
                                onClick={this.onEdit.bind(this, resource._id)}
                            >
                                <i className="fas fa-edit fa-lg" />
                            </button>
                        )}
                    </div>
                </td>
            </tr>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(
    mapStateToProps,
    { editResource }
)(ResourceInfo);
