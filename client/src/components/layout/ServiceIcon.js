import React, { Component } from "react";
import PropTypes from "prop-types";
class ServiceIcon extends Component {
    state = {
        show: false
    };

    mouseOver = () => {
        this.setState({
            show: true
        });
    };

    mouseOut = () => {
        this.setState({
            show: false
        });
    };

    render() {
        const { iconClass, title, description, onClick } = this.props;
        const { show } = this.state;
        return (
            <div>
                <span
                    className="pointer"
                    onClick={onClick}
                    onMouseOver={this.mouseOver}
                    onMouseOut={this.mouseOut}
                >
                    <i className={iconClass} />
                    <h3>{title}</h3>
                    <p className="transition" style={{ opacity: show ? 1 : 0 }}>
                        {description}
                    </p>
                </span>
            </div>
        );
    }
}

ServiceIcon.prototypes = {
    iconClass: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default ServiceIcon;
