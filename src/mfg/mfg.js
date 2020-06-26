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
import "./mfg.css";

export default class MFG extends React.Component {
    render() {
        function Links() {
            let { path, url } = useRouteMatch();

            return (
                <>
                    <ul>
                        <li>
                            <Link to={`${url}`}>MFG Data</Link>
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
                            <h2>MFG Data</h2>
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
							<span>Current Data:</span>
                            <table className="MFG_Table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>TP</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>17</td>
                                        <td>Haustaler</td>
                                        <th>M</th>
                                        <td>15</td>
                                    </tr>
                                    <tr>
                                        <td>18</td>
                                        <td>Boff</td>
                                        <th>M</th>
                                        <td>19</td>
                                    </tr>
                                    <tr>
                                        <td>19</td>
                                        <td>Mart</td>
                                        <th>L</th>
                                        <td>17</td>
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
