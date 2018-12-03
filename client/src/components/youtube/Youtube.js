import React, { Component } from "react";

export default class Youtube extends Component {
    render() {
        const { youtube } = this.props;
        return (
            <div class="embed-responsive embed-responsive-16by9">
                <iframe
                    class="embed-responsive-item"
                    src={youtube.src}
                    allowfullscreen
                />
            </div>
        );
    }
}
