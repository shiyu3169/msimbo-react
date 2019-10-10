import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getResources, filterResources } from "../../actions/resourceActions";
import Resource from "../resources/Resource";
import ResourceHead from "../resources/ResourceHead";
import ResourceNew from "../resources/ResourceNew";
import InputGroup from "../layout/InputGroup";
import BackToTop from "../layout/BackToTop";

const Resources = ({ resources, creating, getResources, filterResources }) => {
  const [name, setName] = useState("");

  useEffect(() => {
    getResources();
  }, [getResources]);

  const onChange = async e => {
    await setName(e.target.value);
    filterResources(name);
  };

  return (
    <div>
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
                  onChange={onChange}
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {resources.map(resource => (
              <Resource key={resource._id} resource={resource} />
            ))}
          </tbody>
        </table>
      </div>
      <BackToTop />
    </div>
  );
};

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
  { getResources, filterResources }
)(Resources);
