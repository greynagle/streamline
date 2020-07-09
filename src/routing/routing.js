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
import TestTable from "./TestTable";
import TestContents from "./TestContents";

export default class Routing extends React.Component {
    render() {
        function Links() {
            let { path, url } = useRouteMatch();

            return (
                <>
                    <ul>
                        <li>
                            <Link to={`${url}`}>History</Link>
                        </li>
                        <li>
                            <Link to={`${url}/routing-form`}>New Test</Link>
                        </li>
                    </ul>

                    <Switch>
                        <Route exact path={path}>
                            <h2>History</h2>
                            <span className="info">
                                The Routing branch is used to simulate
                                production to estimate throughput and allocate
                                resources.
                                <br />
                                The table below shows the testing history. Click
                                the test number to see the full test data.
								<br/>
                                Follow the link above to run a new test.
                            </span>
                            <br />
                            <br />
                            Test History:
                            <TestTable />
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
                    return <TestContents id={formType} />;
            }
        }

        return (
            <div className="sub-header">
                <Links />
            </div>
        );
    }
}
