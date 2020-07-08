import React, { Component } from "react";
import "./mfg.css";
import ApiContext from "../ApiContext";
import config from "../config";

const Required = () => <span className="machine_required">*</span>;

export default class MachineForm extends React.Component {
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
        name: "",
        type: "M",
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (
            /[^a-zA-Z\d\s]/.test(this.state.name) ||
            /[^A-Z]/.test(this.state.type)
        ) {
            alert("Input Error: Verify input validity");
        } else {
            fetch(`${config.API_ENDPOINT}/machines/`, {
                mode: "cors",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // Authorization: `Bearer ${config.API_TOKEN}`,
                },
                body: JSON.stringify({
                    name: this.state.name,
                    type: this.state.type,
                    cellid: 0,
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
                    const { id, name, type } = resJSON;
                    this.context.addMachine({ id, name, type });
                })
                .catch((error) => {
                    console.error({ error });
                });
        }
    };

	handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    };

    handleClickCancel = () => {
        // this.props.history.push("/");
        alert("Cancelled");
    };

    render() {
        const { error } = this.state;
        return (
            <section className="machine_form">
                <h2>Add a new machine</h2>
                <form className="machine_form" onSubmit={this.handleSubmit}>
                    <div className="machine_error" role="alert">
                        {error && <p>{error.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="name">Machine Name</label>
                        <input
                            className="new-inputs"
                            type="text"
                            name="name"
                            id="name"
							onChange={this.handleChange}
                            placeholder="e.g. Okuma"
							autoComplete="off"
                        />
                    </div>
                    <div>
                        <label htmlFor="type">
                            Machine Type <Required />
                        </label>
                        <select
                            className="new-inputs"
                            id="type"
                            onChange={this.handleChange}
                            autoComplete="off"
                        >
                            <option value="M">Mill</option>
                            <option value="T">Lathe</option>
                        </select>
                    </div>
                    <div className="Button__Array">
                        <button type="button" onClick={this.handleClickCancel}>
                            Cancel
                        </button>{" "}
                        <button type="submit">Submit</button>
                    </div>
                </form>
                <div className="instructions">
                    <br />
                    <span className="info">
                        Please input all available information.
                        <br />
                        The machine name is used to identify the various
                        machines. Machine Type determines what type of
                        operations the machine performs.
                    </span>
                </div>
            </section>
        );
    }
}
