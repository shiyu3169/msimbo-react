import React from "react";

export default function UserInfo() {
    return (
        <React.Fragment>
            <div className="text-center">
                <p>
                    <b>Name: </b>
                    firstName lastName
                </p>
                <p className="sw-profile">
                    <b>Email: </b>
                    email@gmail.com
                </p>
                <p>
                    <b>Register Time: </b>
                    month/year
                </p>
            </div>
            <button className="btn btn-outline-info btn-block">
                Edit Profile
            </button>
        </React.Fragment>
    );
}
