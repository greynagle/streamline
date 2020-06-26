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
import "./routing.css"


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
                            <Link to={`${url}/routing-form`}>New Route Plan</Link>
                        </li>
                    </ul>

                    <Switch>
                        <Route exact path={path}>
                            <span>
								The Routing branch is used to simulate production to estimate throughput 
								and allocate resources.<br/>Follow the link above to define a test.
							</span>
							<br/>
							<br/>
							<span>To be filled in with test history data</span>
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
