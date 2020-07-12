import React from "react";
import ReactDOM from "react-dom";
import TestCon from "../routing/TestContents";
import { mount } from 'enzyme'
import { BrowserRouter as Router } from "react-router-dom";

describe("App test", () => {
    it("renders without crashing", () => {
        const app = mount(
            <Router>
                <TestCon />
            </Router>
        );
        const div = document.createElement("div");
        ReactDOM.render(app, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
