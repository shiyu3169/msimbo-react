import React, { Component } from "react";
import { connect } from "react-redux";
import { getVideos, createVideo } from "../../actions/videoActions";
import Youtube from "./Youtube";
import YoutubeNew from "./YoutubeNew";
import BackToTop from "../layout/BackToTop";
class Youtubes extends Component {
    componentDidMount() {
        this.props.getVideos();
    }

    render() {
        const { videos, creating, createVideo, currentUser } = this.props;
        return (
            <div className="sw-bg-white">
                <div className="container">
                    {creating ? (
                        <YoutubeNew />
                    ) : (
                        currentUser.admin && (
                            <button
                                onClick={createVideo}
                                className="btn btn-outline-dark float-right"
                            >
                                New Playlist
                            </button>
                        )
                    )}

                    {videos.map(video => (
                        <Youtube key={video._id} video={video} />
                    ))}
                </div>
                <BackToTop />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    videos: state.video.videos,
    creating: state.video.creating
});

export default connect(
    mapStateToProps,
    { getVideos, createVideo }
)(Youtubes);
