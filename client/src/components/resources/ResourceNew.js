import React, { Component } from "react";
import { connect } from "react-redux";
import InputGroup from "../layout/InputGroup";
import { addResource, createResource } from "../../actions/resourceActions";

class ResourceNew extends Component {
    state = {
        name: "",
        src: ""
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    onSubmit = e => {
        e.preventDefault();
        const { name, src } = this.state;
        const { addResource, createResource } = this.props;
        const resource = {
            name,
            src
        };
        addResource(resource).then(createResource());
    };

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
                    <div className="col-6">
                        <InputGroup
                            name="src"
                            placeholder="Resource Source"
                            onChange={this.onChange}
                        />
                    </div>
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
                            type="button"
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
    { addResource, createResource }
)(ResourceNew);
