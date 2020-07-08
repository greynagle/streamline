import React, { Component } from "react";
import ApiContext from "../ApiContext";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    useParams,
    useRouteMatch,
} from "react-router-dom";
import AsmContents from "./AsmContents";

export default class AsmTable extends Component {
    static defaultProps = {};
    static contextType = ApiContext;

    render() {
        const { assemblies } = this.context;
        // console.log(assemblies)
        const Contents = (props) => {
            let { path, url } = useRouteMatch();
            return (
                <>
                    <Link to={`${url}/${props.id}`}>{props.id}</Link>
                    <Route path={`${path}/:asmId`}>
                        <AsmContents />
                    </Route>
                </>
            );
        };

        return (
            <table className="PDM_Table">
                <thead>
                    <tr>
                        <th>Asm. #</th>
                        <th>Desc</th>
                    </tr>
                </thead>
                <tbody>
                    {assemblies.map((val, ind) => {
                        return (
                            <tr key={ind}>
                                <td>
                                    <Contents id={val.id} />
                                </td>
                                <td>{val.description}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }
}
