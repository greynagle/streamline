import React, { Component } from "react";

import ApiContext from "../ApiContext";
import config from "../config";

const Required = () => <span className="routing_required">*</span>;

export default class RoutingForm extends React.Component {
    static defaultProps = {
        history: {
            goBack: () => {},
        },
        match: {
            params: {},
        },
    };
    static contextType = ApiContext;
    state = {
        error: null,
        contents: "",
    };

    testContents = () => {
        let truthiness = false;
        const asmIds = this.context.assemblies.map((val) => {
            return val.id;
        });
        this.state.contents.split(",").forEach((elem) => {
            if (!asmIds.includes(Number(elem))) {
                truthiness = true;
            }
        });
        return truthiness;
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (/[^\d,]/.test(this.state.contents)) {
            alert("Input Error: Verify input validity");
        } else if (this.testContents()) {
            alert("Assembly number does not exist");
        } else {
            fetch(`${config.API_ENDPOINT}/tests/`, {
                mode: "cors",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // Authorization: `Bearer ${config.API_TOKEN}`,
                },
                body: JSON.stringify({
                    contents: this.state.contents.split(","),
                }),
            })
                .then((res) => {
                    if (!res.ok) {
                        return res.json().then((e) => Promise.reject(e));
                    }
                    return res.json();
                })
                .then((resJSON) => {
                    console.log(resJSON)
					// const { description, id } = resJSON;
                    // this.context.addAssembly({ description, id });
                })
                .catch((error) => {
                    console.error({ error });
                });
        }
    };

    handleClickCancel = () => {
        // this.props.history.push("/");
        alert("Cancelled");
    };

	handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    };

    render() {
        const { error } = this.state;
        return (
            <>
                <section className="routing_form">
                    <h2>New Test</h2>
                    <form className="routing_form" onSubmit={this.handleSubmit}>
                        <div className="routing_error" role="alert">
                            {error && <p>{error.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="content">
                                Asm. Numbers <Required />
                            </label>
                            <textarea
                                className="new-inputs"
                                name="contents"
                                id="contents"
                                cols="7"
                                rows="1"
								autoComplete="off"
								onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div className="Button__Array">
                            <button
                                type="button"
                                onClick={this.handleClickCancel}
                            >
                                Cancel
                            </button>{" "}
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </section>
                <div className="instructions">
                    <p>
                        Assembly number is a comma-separated list of assemblies.
                        The test will use all available machines without
                        preference. 
                    </p>
                </div>
            </>
        );
    }
}
