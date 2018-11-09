import React, { Component } from "react";
import { connect } from "react-redux";
import { edit } from "../../actions/userActions";
import $ from "jquery";

class UserMenu extends Component {
    scroll = id => {
        $("html,body").animate({
            scrollTop: $(id).offset().top
        });
    };
    onClick = e => {
        e.preventDefault();
        this.props.edit();
    };
    render() {
        const { editing, match } = this.props;
        return (
            <div className="fixed">
                <ul className="list-group-flush">
                    <li
                        onClick={this.scroll.bind(this, "#info")}
                        className="list-group-item list-group-item-action pointer"
                    >
                        Info
                    </li>
                    <li
                        onClick={this.scroll.bind(this, "#bio")}
                        className="list-group-item list-group-item-action pointer"
                    >
                        Biography
                    </li>
                    <li
                        onClick={this.scroll.bind(this, "#links")}
                        className="list-group-item list-group-item-action pointer"
                    >
                        Links
                    </li>
                    <li
                        onClick={this.scroll.bind(this, "#grade")}
                        className="list-group-item list-group-item-action pointer"
                    >
                        Grade
                    </li>
                </ul>
                {editing && (
                    <button
                        className="btn btn-block btn-outline-success"
                        type="submit"
                        form="editForm"
                    >
                        Submit
                    </button>
                )}

                {!editing && (
                    <button
                        type="button"
                        className="btn btn-block btn-outline-info"
                        onClick={this.onClick}
                    >
                        Edit
                    </button>
                )}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    editing: state.user.editing
});

export default connect(
    mapStateToProps,
    { edit }
)(UserMenu);
