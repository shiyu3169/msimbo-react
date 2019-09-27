import React, { Component } from "react";
import InputGroup from "../layout/InputGroup";
import { connect } from "react-redux";
import {
    editResource,
    deleteResource,
    updateResource
} from "../../actions/resourceActions";

class ResourceEdit extends Component {
    state = {
        name: "",
        src: ""
    };

    componentDidMount() {
        const { name, src } = this.props.resource;
        this.setState({
            name,
            src
        });
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onCancel = () => {
        this.props.editResource("");
    };

    onDelete = id => {
        this.props.deleteResource(id);
    };

    onSubmit = () => {
        const { name, src } = this.state;
        const resource = {
            name,
            src,
            _id: this.props.resource._id
        };

        this.props.updateResource(resource).then(() => {
            this.props.editResource("");
        });
    };

    render() {
        const { resource } = this.props;
        const { name, src } = this.state;
        return (
            <tr>
                <td className="row">
                    <div className="col-6">
                        <InputGroup
                            name="name"
                            value={name}
                            placeholder="Resource Name..."
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="col-6">
                        <InputGroup
                            name="src"
                            value={src}
                            placeholder="Resource Source..."
                            onChange={this.onChange}
                        />
                    </div>
                </td>
                <td>
                    <div className="float-right">
                        <button
                            className="btn btn-outline-success"
                            onClick={this.onSubmit}
                        >
                            Submit
                        </button>
                        <button
                            className="btn btn-outline-danger"
                            onClick={this.onDelete.bind(this, resource._id)}
                        >
                            Delete
                        </button>
                        <button
                            className="btn btn-outline-warning"
                            onClick={this.onCancel}
                        >
                            Cancel
                        </button>
                    </div>
                </td>
            </tr>
        );
    }
}

export default connect(
    null,
    { editResource, updateResource, deleteResource }
)(ResourceEdit);
