import React from "react";
import ReactDOM from "react-dom";
import Table from "../mfg/MfgTable";
import { mount } from "enzyme";
import ApiContext from "../ApiContext";

describe("App test", () => {
    it("renders without crashing", () => {
        const app = mount(<Table />);
        const div = document.createElement("div");
        ReactDOM.render(app, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it("allows context?", () => {
        const values = {
            machines: [
                { id: 1, name: "HAAS", type: "M" },
                { id: 2, name: "OKUMA", type: "M" },
                { id: 3, name: "MAZAK", type: "M" },
                { id: 4, name: "DELTA", type: "T" },
                { id: 5, name: "JET", type: "T" },
            ],
        };

        const app = mount(
            <ApiContext.Provider value={values}>
                <Table />
            </ApiContext.Provider>
        );
        const div = document.createElement("div");
        ReactDOM.render(app, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
