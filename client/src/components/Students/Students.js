import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import InputGroup from "../layout/InputGroup";
import { getUsers } from "../../actions/userActions";
import Student from "./Student";

class Students extends Component {
    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        const { users } = this.props;
        return (
            <div className="sw-bg-white">
                <div className="container">
                    <h3 className="sw-red">Our Students</h3>
                    <InputGroup
                        name="search"
                        type="text"
                        placeholder="Seaching by Student Name or Registered Time..."
                    />
                    <ul className="list-group list-group-flush">
                        {users.map(user => (
                            <Student key={user._id} user={user} />
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

Students.propTypes = {
    users: PropTypes.array.isRequired,
    getUsers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    users: state.user.users
});

export default connect(
    mapStateToProps,
    { getUsers }
)(Students);
