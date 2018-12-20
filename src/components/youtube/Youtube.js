import React, { Component } from "react";
import { connect } from "react-redux";
import YoutubeDelete from "./YoutubeDelete";

class Youtube extends Component {
    render() {
        const { video, currentUser } = this.props;
        return (
            <React.Fragment>
                <h1 className="center">{video.name}</h1>
                {currentUser.admin && (
                    <div className="float-right">
                        <button
                            className="btn btn-outline-danger"
                            data-toggle="modal"
                            data-target={`#delete${video._id}`}
                        >
                            Delete
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
                <YoutubeDelete video={video} />
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
