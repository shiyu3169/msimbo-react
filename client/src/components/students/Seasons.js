import React, { Component } from "react";
import { connect } from "react-redux";
import Season from "./Season";
import { filterUser } from "../../actions/userActions";
class Seasons extends Component {
    state = {
        seasons: new Set()
    };

    setSeasons = users => {
        const { seasons } = this.state;
        const newSeason = seasons;
        for (let user of users) {
            const year = new Date(user.dateCreated).getFullYear();
            const month = new Date(user.dateCreated).getMonth();
            if (month <= 6) {
                newSeason.add(`Spring ${year}`);
                this.setState({
                    seasons: newSeason
                });
            } else {
                newSeason.add(`Fall ${year}`);
                this.setState({
                    seasons: newSeason
                });
            }
        }
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.users.length !== this.props.users.length) {
            function compare(a, b) {
                if (a.dateCreated > b.dateCreated) {
                    return 1;
                } else {
                    return -1;
                }
            }
            this.setSeasons(nextProps.users.sort(compare));
        }
    }

    active = e => {
        const activedButton = document.querySelector(".active");
        activedButton.classList.remove("active");
        e.target.classList.add("active");
        const content = e.target.textContent.split(" ");
        if (e.target.textContent !== "All") {
            const filter = {
                type: "date",
                text: content[1],
                season: content[0]
            };
            this.props.filterUser(filter);
        }
    };

    render() {
        const { seasons } = this.state;
        return (
            <ul className="list-inline">
                <li className="list-inline-item">
                    <button
                        className="btn btn-outline-secondary active"
                        onClick={this.active}
                    >
                        All
                    </button>
                </li>
                {Array.from(seasons).map((season, i) => (
                    <Season key={i} season={season} active={this.active} />
                ))}
            </ul>
        );
    }
}

const mapStateToProps = state => ({
    users: state.user.users
});

export default connect(
    mapStateToProps,
    { filterUser }
)(Seasons);
