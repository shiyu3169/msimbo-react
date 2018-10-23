import React, { Component } from "react";
import InputGroup from "../layout/InputGroup";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getResources } from "../../actions/resourceActions";
import Resource from "./Resource";

class Resources extends Component {
    componentDidMount() {
        this.props.getResources();
    }

    render() {
        const { resources } = this.props;
        return (
            <div className="sw-bg-white">
                <div className="container-fluid">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Resources</th>
                                <th>
                                    <button className="btn btn-outline-primary float-right">
                                        <i className="fas fa-plus fa-lg" />
                                    </button>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <InputGroup
                                        type="text"
                                        name="inputName"
                                        placeholder="Seaching Resources..."
                                    />
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {resources.map(resource => (
                                <Resource
                                    key={resource._id}
                                    resource={resource}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

Resources.propTypes = {
    resources: PropTypes.array.isRequired,
    getResources: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    resources: state.resource.resources
});

export default connect(
    mapStateToProps,
    { getResources }
)(Resources);
