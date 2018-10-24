import React from "react";

export default function UserGrade() {
    return (
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>
                        <h4>Grade</h4>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>name</td>
                    <td>score</td>
                    <td>
                        <button className="btn btn-outline-info">
                            Show Comment
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
