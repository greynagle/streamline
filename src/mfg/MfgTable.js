import React, { Component } from "react";
import ApiContext from "../ApiContext";

export default class MfgTable extends Component {
    static defaultProps = {};
    static contextType = ApiContext;

    render() {
        const { machines } = this.context;

        return (
            <table className="MFG_Table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {machines.map((val, ind) => {
                        return (
                            <tr key={ind}>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>{val.type}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }
}


