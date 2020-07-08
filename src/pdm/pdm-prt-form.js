import React, { Component } from "react";
import "./pdm.css";
import ApiContext from "../ApiContext";
import config from "../config";


const Required = () => <span className="prt_required">*</span>;

export default class PrtForm extends Component {
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
        stock: "",
        machine: "M",
        complexity: "",
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (
            /[^a-zA-Z\d\s,]/.test(this.state.description) ||
            /[^a-zA-Z\d\s,]/.test(this.state.stock) ||
            /[^\d,.]/.test(this.state.complexity) || 
			this.state.machine.split('').length !== this.state.complexity.split(",").length
        ) {
            alert("Input Error: Verify input validity");
        } else {
            fetch(`${config.API_ENDPOINT}/parts/`, {
                mode: "cors",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // Authorization: `Bearer ${config.API_TOKEN}`,
                },
                body: JSON.stringify({
                    description: this.state.description,
                    stock: this.state.stock,
                    machine: this.state.machine,
                    complexity: this.state.complexity,
                }),
            })
                .then((res) => {
                    if (!res.ok) {
                        return res.json().then((e) => Promise.reject(e));
                    }
                    return res.json();
                })
                .then((resJSON) => {
                    const {description, id, stock} = resJSON
					this.context.addPart({description, id, stock});
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

    render() {
        const { error } = this.state;
        return (
            <section className="prt_form">
                <h2>New Part</h2>
                <form className="prt_form" onSubmit={this.handleSubmit}>
                    <div className="prt_error" role="alert">
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
                        <label htmlFor="stock">
                            Stock Origin <Required />
                        </label>
                        <input
                            className="new-inputs"
                            type="text"
                            name="stock"
                            id="stock"
                            placeholder="316 UNS S31600, ASTM A276"
                            onChange={this.handleChange}
                            autoComplete="off"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="machine">
                            Machine Code <Required />
                        </label>
                        <select
                            className="new-inputs"
                            id="machine"
                            onChange={this.handleChange}
                            autoComplete="off"
                        >
                            <option value="M">Mill</option>
                            <option value="T">Lathe</option>
                            <option value="MT">Mill/Lathe</option>
                            <option value="TM">Lathe/Mill</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="complexity">
                            Complexity <Required />
                        </label>
                        <input
                            className="new-inputs"
                            type="string"
                            name="complexity"
                            id="complexity"
                            placeholder="1.00,2.50"
                            onChange={this.handleChange}
                            autoComplete="off"
                            required
                        />
                    </div>
                    <div className="Button__Array">
                        <button type="button" onClick={() => this.props.history.goBack()}>
                            Cancel
                        </button>{" "}
                        <button type="submit">Submit</button>
                    </div>
                </form>
                <div className="instructions">
                    <span className="info">
                        Please input all available information. Description is a
                        component definition. Stock Origin is the type of raw
                        material used. Machine Code dictates what machines
                        process the component. Complexity is a comma separated
                        list of how many minutes each operation takes.
                    </span>
                </div>
            </section>
        );
    }
}
