import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getResources } from "../../actions/resourceActions";
import Resource from "./Resource";
import ResourceHead from "./ResourceHead";
import ResourceNew from "./ResourceNew";
import InputGroup from "../layout/InputGroup";
import BackToTop from "../layout/BackToTop";

class Resources extends Component {
    componentDidMount() {
        this.props.getResources();
    }

    render() {
        const { resources, creating } = this.props;
        return (
            <div className="sw-bg-white">
                <div className="container-fluid">
                    <table className="table table-striped table-hover">
                        <thead>
                            {creating ? <ResourceNew /> : <ResourceHead />}
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
                <BackToTop />
            </div>
        );
    }
}

Resources.propTypes = {
    resources: PropTypes.array.isRequired,
    getResources: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    resources: state.resource.resources,
    creating: state.resource.creating
});

export default connect(
    mapStateToProps,
    { getResources }
)(Resources);
