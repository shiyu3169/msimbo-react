import React from "react";
import InputGroup from "./layout/InputGroup";

const Register = () => {
    return (
        <div
            className="modal fade"
            id="RegisterModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content sw-bg-dark">
                    <div className="modal-header">
                        <h5 className="modal-title">Register</h5>
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
                                name="userNameRegister"
                                type="text"
                                label="Username"
                                placeholder="Enter Username Here..."
                            />
                            <InputGroup
                                name="passWordRegister"
                                type="password"
                                label="Password"
                                placeholder="Enter Password Here..."
                            />
                            <InputGroup
                                name="verifyPassWord"
                                type="password"
                                label="Verify Password"
                                placeholder="Verify Password Here..."
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

export default Register;
