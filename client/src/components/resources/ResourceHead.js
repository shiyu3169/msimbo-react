import React, { Component } from "react";
import InputGroup from "../layout/InputGroup";
export default class ResourceHead extends Component {
    render() {
        return (
            <thead>
                <tr>
                    <th>Resources</th>
                    <th>
                        <button className="btn btn-outline-primary float-right">
                            <i className="fas fa-plus fa-lg" />
                        </button>
                    </th>
                </tr>
                <tr>
                    <th>
                        <InputGroup
                            type="text"
                            name="inputName"
                            placeholder="Seaching Resources..."
                        />
                    </th>
                </tr>
            </thead>
        );
    }
}
