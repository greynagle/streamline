import React from "react";
import ReactDOM from "react-dom";
import TestForm from "../routing/routing-form";
import { shallow } from 'enzyme'
import { BrowserRouter as Router } from "react-router-dom";

describe("App test", () => {
    it("renders without crashing", () => {
        const app = shallow(
            <Router>
                <TestForm />
            </Router>
        );
        const div = document.createElement("div");
        ReactDOM.render(app, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});