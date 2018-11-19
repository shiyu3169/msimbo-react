import React, { Component } from "react";
import { connect } from "react-redux";
import Season from "./Season";
import { filterUser, changeFilter } from "../../actions/userActions";
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

    active = async e => {
        const activedButton = document.querySelector(".active");
        activedButton.classList.remove("active");
        e.target.classList.add("active");
        const content = e.target.textContent.split(" ");
        const filter = this.props.filter;
        if (e.target.textContent !== "All") {
            filter.season = content[0];
            filter.year = content[1];
        } else {
            filter.season = "";
            filter.year = "";
        }
        await this.props.changeFilter(filter);
        this.props.filterUser();
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
    users: state.user.users,
    filter: state.user.filter
});

export default connect(
    mapStateToProps,
    { filterUser, changeFilter }
)(Seasons);
