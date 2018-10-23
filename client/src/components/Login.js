import React from "react";
import InputGroup from "./layout/InputGroup";

const Login = () => {
    return (
        <div
            className="modal fade"
            id="loginModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content sw-bg-dark">
                    <div className="modal-header">
                        <h5 className="modal-title">Login</h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <InputGroup
                                name="userName"
                                type="text"
                                label="Username"
                                placeholder="Enter Username Here..."
                            />
                            <InputGroup
                                name="passWord"
                                type="password"
                                label="Password"
                                placeholder="Enter Password Here..."
                            />
                            <button className="btn btn-outline-success btn-block">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
