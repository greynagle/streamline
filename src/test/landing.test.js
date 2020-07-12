import React from "react";
import ReactDOM from "react-dom";
import Landing from "../landing/landing";
import { mount } from 'enzyme'
import { BrowserRouter as Router } from "react-router-dom";

describe("App test", () => {
    it("renders without crashing", () => {
        const app = mount(
            <Router>
                <Landing />
            </Router>
        );
        const div = document.createElement("div");
        ReactDOM.render(app, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
