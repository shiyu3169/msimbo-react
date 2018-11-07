import React from "react";

export default function UserImage() {
    return (
        <React.Fragment>
            <div className="text-center">
                <img className="userImage" src="../logo.png" alt="user" />
                <br />
                <br />
                {/* <button className="btn btn-block btn-outline-info">
                    Update Image
                </button> */}
            </div>
        </React.Fragment>
    );
}
