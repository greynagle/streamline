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
import PrtTable from "./PrtTable";
import AsmTable from "./AsmTable";
import "./pdm.css";
import ApiContext from "../ApiContext";
import AsmContents from "./AsmContents";

export default class PDM extends React.Component {
    static defaultProps = {};
    static contextType = ApiContext;

    render() {
        function Links() {
            let { path, url } = useRouteMatch();

            return (
                <>
                    <ul>
                        <li>
                            <Link to={`${url}`}>PDM Data</Link>
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
                            <h2>Data Management</h2>
                            <span className="info">
                                The PDM branch is designed for adding parts and
                                assemblies. Follow the links above to find the
                                proper input form, or click on the assembly
                                numbers below to see their contents.
                            </span>
                            <br />
                            <br />
                            <span>Current Parts:</span>
                            <PrtTable />
                            <br />
                            <span>Current Assemblies:</span>
                            <AsmTable />
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
                    return <AsmContents id={formType} />;
            }
        }

        return (
            <div className="sub-header">
                <Links />
            </div>
        );
    }
}
