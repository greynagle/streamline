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
import PartForm from "./pdm-prt-form.js";
import AsmForm from "./pdm-asm-form";
import "./pdm.css";

export default class PDM extends React.Component {
    render() {
        function Links() {
            let { path, url } = useRouteMatch();

            return (
                <>
                    <ul>
                        <li>
                            <Link to={`${url}`}>Current Data</Link>
                        </li>
                        <li>
                            <Link to={`${url}/prt-form`}>New Part</Link>
                        </li>
                        <li>
                            <Link to={`${url}/asm-form`}>New Assembly</Link>
                        </li>
                    </ul>

                    <Switch>
                        <Route exact path={path}>
                            <span>
                                The PDM branch is designed for adding<br/>parts
                                (individual components) and assemblies (bundles
                                of components).<br/>Follow the links above to find
                                the proper input form.
                            </span>
							<br/>
							<br/>
                            <span>To be filled in with table data from backend</span>
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
                case "prt-form":
                    return <PartForm />;
                case "asm-form":
                    return <AsmForm />;
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
