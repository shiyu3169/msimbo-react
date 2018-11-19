import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getResources, filterResource } from "../../actions/resourceActions";
import Resource from "./Resource";
import ResourceHead from "./ResourceHead";
import ResourceNew from "./ResourceNew";
import InputGroup from "../layout/InputGroup";
import BackToTop from "../layout/BackToTop";
class Resources extends Component {
    state = {
        name: ""
    };

    componentDidMount() {
        this.props.getResources();
    }

    onChange = async e => {
        await this.setState({
            [e.target.name]: e.target.value
        });
        this.props.filterResource(this.state.name);
    };

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
                                        name="name"
                                        placeholder="Seaching Resources..."
                                        onChange={this.onChange}
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
    { getResources, filterResource }
)(Resources);
