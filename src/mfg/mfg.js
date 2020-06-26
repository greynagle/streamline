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
import MfgMachineForm from "./mfg-machine-form";
// import MfgCellForm from "./mfg-cell-form";
import "./mfg.css"

export default class MFG extends React.Component {
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
                            <Link to={`${url}/mfg-machine-form`}>
                                New Machine
                            </Link>
                        </li>
                        {/* <li>
                            <Link to={`${url}/mfg-cell-form`}>New Cell</Link>
                        </li> */}
                    </ul>

                    <Switch>
                        <Route exact path={path}>
                            <span>
                                The Manufacturing branch is designed for adding
                                machines and associated
                                <br />
                                data used to process parts
                                <br />
                                Follow the links above to find the proper input
                                form.
                            </span>
                            <br />
                            <br />
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
                case "mfg-machine-form":
                    return <MfgMachineForm />;
                // case "mfg-cell-form":
                //     return <MfgCellForm />;
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
