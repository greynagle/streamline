import React from "react";
import { Link } from "react-router-dom";
import "./landing.css"

export default class Landing extends React.Component {
    render() {
        return (
            <div className="nav_link">
                <ul>
                    <li>
                        <Link to={`/pdm`}>PDM</Link>
                    </li>
                    <li>
                        <Link to={`/mfg`}>Manufacturing</Link>
                    </li>
                    <li>
                        <Link to={`/routing`}>Routing</Link>
                    </li>
                </ul>

                <p>
                    This is a tool to help visualize factory throughput.
                    Depending on roles,
                    <br />
                    a user can populate the database with components, create
                    assemblies, or <br />
                    simulate creating those assemblies in user-defined machining
                    cells. Follow <br />
                    the link pertaining to your role for more instructions.
                </p>
            </div>
        );
    }
}
