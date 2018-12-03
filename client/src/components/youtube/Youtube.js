import React, { Component } from "react";
import { connect } from "react-redux";

class Youtube extends Component {
    render() {
        const { video } = this.props;
        return (
            <React.Fragment>
                <h1 className="center">{video.name}</h1>
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

export default connect(
    null,
    {}
)(Youtube);
