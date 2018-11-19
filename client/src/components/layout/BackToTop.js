import React from "react";
import $ from "jquery";

export default function BackToTop() {
    const scroll = () => {
        $("html,body").animate({
            scrollTop: $("#top").offset().top
        });
    };

    return (
        <button
            onClick={scroll}
            className="btn btn-outline-dark fixed-bottom-right"
        >
            <i className="fas fa-level-up-alt" />
        </button>
    );
}
