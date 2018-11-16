import React, { Component } from "react";
import InputGroup from "../layout/InputGroup";
import { connect } from "react-redux";
import { createReousrce } from "../../actions/resourceActions";
class ResourceHead extends Component {
    render() {
        const { createReousrce } = this.props;
        return (
            <tr>
                <th>Resources</th>
                <th>
                    <button
                        onClick={createReousrce}
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
    { createReousrce }
)(ResourceHead);
