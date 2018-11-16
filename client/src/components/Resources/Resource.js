import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Resource extends Component {
    render() {
        const { resource } = this.props;
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
                        <button className="btn btn-outline-warning">
                            <i className="fas fa-edit fa-lg" />
                        </button>
                        <button className="btn btn-outline-danger">
                            <i className="far fa-trash-alt fa-lg" />
                        </button>
                    </div>
                </td>
            </tr>
        );
    }
}

Resource.propTypes = {
    resource: PropTypes.object.isRequired
};
