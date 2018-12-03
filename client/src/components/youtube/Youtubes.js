import React, { Component } from "react";
import { connect } from "react-redux";
import { getVideos } from "../../actions/videoActions";
import Youtube from "./Youtube";

class Youtubes extends Component {
    componentDidMount() {
        this.props.getVideos();
    }

    render() {
        const { videos } = this.props;
        return (
            <div className="sw-bg-white">
                <div className="container">
                    {videos.map(video => (
                        <Youtube key={video._id} video={video} />
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    videos: state.video.videos,
    creating: state.resource.creating
});

export default connect(
    mapStateToProps,
    { getVideos }
)(Youtubes);
