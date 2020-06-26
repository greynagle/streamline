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
                            <h2>PDM Data</h2>
                            <span>
                                The PDM branch is designed for adding
                                <br />
                                parts (individual components) and assemblies
                                (bundles of components).
                                <br />
                                Follow the links above to find the proper input
                                form.
                            </span>
                            <br />
                            <br />
							<span>Current Data:</span>
                        
							<table className="PDM_Table">
                                <thead>
                                    <tr>
                                        <th>PN</th>
                                        <th>Desc</th>
                                        <th>SO</th>
                                        <th>MC</th>
                                        <th>Comp.</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>123000</td>
                                        <td>Gland</td>
                                        <td>A276</td>
                                        <td>TM</td>
                                        <td>3,1</td>
                                    </tr>
                                    <tr>
                                        <td>123001</td>
                                        <td>Sleeve</td>
                                        <td>A276</td>
                                        <td>TM</td>
                                        <td>5,1</td>
                                    </tr>
                                    <tr>
                                        <td>123002</td>
                                        <td>Lock Ring</td>
                                        <td>A276</td>
                                        <td>T</td>
                                        <td>1</td>
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
