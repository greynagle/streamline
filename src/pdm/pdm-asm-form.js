import React, { Component } from "react";
import "./pdm.css";
import ApiContext from "../ApiContext";
import config from "../config";

const Required = () => <span className="asm_required">*</span>;

export default class AsmForm extends Component {
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
        description: "",
        contents: "",
    };

    testContents = () => {
        let truthiness = false;
        const partIds = this.context.parts.map((val) => {
            return val.id;
        });
        // console.log(partIds);
        // console.log(this.state.contents.split(","));
        this.state.contents.split(",").forEach((elem) => {
            if (!partIds.includes(Number(elem))) {
                truthiness = true;
            }
        });
        return truthiness;
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (
            /[^a-zA-Z\d\s,]/.test(this.state.description) ||
            /[^\d,]/.test(this.state.contents)
        ) {
            alert("Input Error: Verify input validity");
        } else if (this.testContents()) {
        	alert("Part number does not exist")
        } else {
            fetch(`${config.API_ENDPOINT}/assemblies/`, {
                mode: "cors",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // Authorization: `Bearer ${config.API_TOKEN}`,
                },
                body: JSON.stringify({
                    description: this.state.description,
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
					const { description, id } = resJSON;
                    this.context.addAssembly({ description, id });
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
            <section className="asm_form">
                <h2>New Assembly</h2>
                <form className="asm_form" onSubmit={this.handleSubmit}>
                    <div className="asm_error" role="alert">
                        {error && <p>{error.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="description">
                            Description <Required />
                        </label>
                        <input
                            className="new-inputs"
                            type="text"
                            name="description"
                            id="description"
                            placeholder="999 30mm Gland 316"
                            onChange={this.handleChange}
                            autoComplete="off"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="contents">
                            Contents (cs) <Required />
                        </label>
                        <textarea
                            className="new-inputs"
                            name="contents"
                            id="contents"
                            cols="7"
                            rows="1"
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="Button__Array">
                        <button type="button" onClick={this.handleClickCancel}>
                            Cancel
                        </button>{" "}
                        <button type="submit">Submit</button>
                    </div>
                </form>
                <div className="instructions">
                    <span className="info">
                        Please input all available information. Description is a
                        component definition. Contents is a comma-separated list
                        of six-digit part numbers.
                    </span>
                </div>
            </section>
        );
    }
}
