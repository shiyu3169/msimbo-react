import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getVideos, createVideo } from "../../actions/videoActions";
import Youtube from "../youtube/Youtube";
import YoutubeNew from "../youtube/YoutubeNew";
import BackToTop from "../layout/BackToTop";

const Videos = ({
  videos,
  creating,
  createVideo,
  user,
  getVideos,
  isAuthenticated
}) => {
  useEffect(() => {
    getVideos();
  }, [getVideos]);

  return (
    <div>
      <div className="container">
        {creating ? (
          <YoutubeNew />
        ) : (
          isAuthenticated &&
          user.admin && (
            <button
              onClick={createVideo}
              className="btn btn-outline-dark float-right"
            >
              New Playlist
            </button>
          )
        )}
        <ul className="list-group">
          {videos.map(video => (
            <Youtube key={video._id} video={video} />
          ))}
        </ul>
      </div>
      <BackToTop />
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  videos: state.video.videos,
  creating: state.video.creating
});

export default connect(
  mapStateToProps,
  { getVideos, createVideo }
)(Videos);
