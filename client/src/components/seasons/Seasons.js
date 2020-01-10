import React, { Component } from "react";
import { connect } from "react-redux";
import Season from "../season/Season";
import { filterUser } from "../../actions/userActions";

class Seasons extends Component {
  // compare(a, b) {
  //   if (a.dateCreated > b.dateCreated) {
  //     return -1;
  //   } else {
  //     return 1;
  //   }
  // }

  active = async e => {
    const activedButton = document.querySelector(".active");
    activedButton.classList.remove("active");
    e.target.classList.add("active");
    this.props.filterUser(e.target.textContent);
  };

  render() {
    const { seasons } = this.props;
    return (
      <ul className="list-inline">
        {seasons &&
          seasons.map((season, i) => (
            <Season key={i} season={season} active={this.active} />
          ))}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  allUsers: state.user.allUsers,
  filter: state.user.filter,
  seasons: state.user.seasons
});

export default connect(mapStateToProps, {
  filterUser
})(Seasons);
