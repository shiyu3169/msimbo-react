import React, { Component } from "react";
import { connect } from "react-redux";

class Youtube extends Component {
    render() {
        const { video, currentUser } = this.props;
        return (
            <React.Fragment>
                <h1 className="center">{video.name}</h1>
                {currentUser.admin && (
                    <div className="float-right">
                        <button className="btn btn-outline-warning">
                            Edit
                        </button>{" "}
                        <button className="btn btn-outline-danger">
                            Cancel
                        </button>
                    </div>
                )}
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                        className="embed-responsive-item"
                        src={video.src}
                        allowFullScreen
                        title={video.name}
                    />
                </div>
                <br />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(
    mapStateToProps,
    {}
)(Youtube);
