import React, { Component } from "react";
import InputGroup from "../layout/InputGroup";
import { connect } from "react-redux";
import { createResource } from "../../actions/resourceActions";
class ResourceHead extends Component {
    render() {
        const { createResource } = this.props;
        return (
            <tr>
                <th>Resources</th>
                <th>
                    <button
                        onClick={createResource}
                        className="btn btn-outline-primary float-right"
                    >
                        <i className="fas fa-plus fa-lg" />
                    </button>
                </th>
            </tr>
        );
    }
}

export default connect(
    null,
    { createResource }
)(ResourceHead);
