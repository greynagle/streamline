import React from "react";
import { Link } from "react-router-dom";

export default class Temp extends React.Component {
    render() {
        return (
            <div className="Note">
                <h2 className="Note__title">
                    <Link to={`/temp`}>temp</Link>
                </h2>
				<h2 className="Note__title">
                    <Link to={`/temp`}>temp</Link>
                </h2>
            </div>
        );
    }
}
