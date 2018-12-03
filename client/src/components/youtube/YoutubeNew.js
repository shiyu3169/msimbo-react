import React, { Component } from "react";
import { connect } from "react-redux";
import InputGroup from "../layout/InputGroup";
import { addVideo, createVideo } from "../../actions/videoActions";

class YoutubeNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            src: ""
        };
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = async e => {
        e.preventDefault();
        const { name, src } = this.state;
        const { addVideo, createVideo } = this.props;
        const video = {
            name,
            src: "https://www.youtube.com/embed/?listType=playlist&list=" + src
        };

        await addVideo(video);
        createVideo();
    };

    render() {
        const { createVideo } = this.props;
        return (
            <form className="row" onSubmit={this.onSubmit}>
                <div className="col-3">
                    <InputGroup
                        name="name"
                        placeholder="Video Name"
                        onChange={this.onChange}
                    />
                </div>
                <div className="col-7">
                    <InputGroup
                        name="src"
                        placeholder="Playlist Id"
                        onChange={this.onChange}
                    />
                </div>
                <div className="col-2">
                    <button className="btn btn-outline-success">Submit</button>
                    <button
                        onClick={createVideo}
                        type="button"
                        className="btn btn-outline-dark"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        );
    }
}

export default connect(
    null,
    { addVideo, createVideo }
)(YoutubeNew);
