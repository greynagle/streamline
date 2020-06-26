import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    useParams,
    useRouteMatch,
} from "react-router-dom";
// import config from "../config";
import RoutingForm from "./routing-form";
import "./routing.css";

export default class Routing extends React.Component {
    render() {
        function Links() {
            let { path, url } = useRouteMatch();

            return (
                <>
                    <ul>
                        <li>
                            <Link to={`${url}`}>Routing Data</Link>
                        </li>
                        <li>
                            <Link to={`${url}/routing-form`}>
                                New Route Plan
                            </Link>
                        </li>
                    </ul>

                    <Switch>
                        <Route exact path={path}>
                            <h2>Routing Data</h2>
                            <span>
                                The Routing branch is used to simulate
                                production to estimate throughput and allocate
                                resources.
                                <br />
                                Follow the link above to define a test.
                            </span>
                            <br />
                            <br />
                            Plan result:
                            <table className="routing_plan_table">
                                <thead>
                                    <tr>
                                        <th>Number</th>
                                        <th>Time (min)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>123456</td>
                                        <td>2.6</td>
                                    </tr>
                                    <tr>
                                        <td>234567</td>
                                        <td>3.8</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Route>
                        <Route path={`${path}/:formType`}>
                            <Forms />
                        </Route>
                    </Switch>
                </>
            );
        }

        function Forms() {
            let { formType } = useParams();

            switch (formType) {
                case "routing-form":
                    return <RoutingForm />;
                default:
                    return <></>;
            }
        }

        return (
            <div className="header">
                <Links />
            </div>
        );
    }
}
