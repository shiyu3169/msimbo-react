import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ResourceInfo from "./ResourceInfo";
import ResourceEdit from "./ResourceEdit";

class Resource extends Component {
    render() {
        const { resource, editing } = this.props;
        if (editing === resource._id) {
            return <ResourceEdit resource={resource} />;
        } else {
            return <ResourceInfo resource={resource} />;
        }
    }
}

const mapStateToProps = state => ({
    editing: state.resource.editing
});

Resource.propTypes = {
    resource: PropTypes.object.isRequired
};

export default connect(
    mapStateToProps,
    {}
)(Resource);
