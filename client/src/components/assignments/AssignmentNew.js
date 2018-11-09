import React, { Component } from "react";
import InputGroup from "../layout/InputGroup";

export default class AssignmentNew extends Component {
    render() {
        return (
            <tr>
                <th>
                    <InputGroup name="name" placeholder="Assignment Name" />
                </th>
                <th>
                    <InputGroup name="due" placeholder="Assignment Due Date" />
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
