import React, { Component } from "react";
import InputGroup from "../layout/InputGroup";

export default class AssignmentNew extends Component {
    render() {
        return (
            <tr>
                <th className="row">
                    <div className="col-6">
                        <InputGroup name="name" placeholder="Assignment Name" />
                    </div>
                    <div className="col-6">
                        <InputGroup
                            name="due"
                            placeholder="Assignment Due Date"
                        />
                    </div>
                </th>
                <th>
                    <InputGroup name="src" placeholder="Assignment Source" />
                </th>
                <th>
                    <div className="float-right margin-bottom">
                        <button className="btn btn-outline-success">
                            Submit
                        </button>
                    </div>
                </th>
            </tr>
        );
    }
}
