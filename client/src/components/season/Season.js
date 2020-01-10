import React, { Component } from "react";
import { connect } from "react-redux";

class Season extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: ""
    };
  }

  componentDidMount() {
    const { season, seasons } = this.props;
    if (seasons[0] === season) {
      this.setState({ active: "active" });
    }
  }

  render() {
    return (
      <li className="list-inline-item">
        <button
          className={`btn btn-outline-secondary ${this.state.active}`}
          onClick={this.props.active}
        >
          {this.props.season}
        </button>
      </li>
    );
  }
}

const mapStateToProps = state => ({
  seasons: state.user.seasons
});

export default connect(mapStateToProps, {})(Season);
