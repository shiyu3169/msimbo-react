import React, { Component } from "react";
import { connect } from "react-redux";
import InputGroup from "../layout/InputGroup";
class ResourceNew extends Component {
    onChange = () => {};
    onSubmit = () => {};

    render() {
        const { createResource } = this.props;
        return (
            <tr>
                <th className="row">
                    <div className="col-6">
                        <InputGroup
                            name="name"
                            placeholder="Resource Name"
                            onChange={this.onChange}
                        />
                    </div>
                </th>
                <th>
                    <InputGroup
                        name="src"
                        placeholder="Resource Source"
                        onChange={this.onChange}
                    />
                </th>
                <th>
                    <div className="float-right margin-bottom">
                        <button
                            onClick={this.onSubmit}
                            className="btn btn-outline-success"
                        >
                            Submit
                        </button>
                        <button
                            className="btn btn-outline-danger"
                            onClick={createResource}
                        >
                            Cancel
                        </button>
                    </div>
                </th>
            </tr>
        );
    }
}

export default connect(
    null,
    {}
)(ResourceNew);
