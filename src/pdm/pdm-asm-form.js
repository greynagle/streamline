import React, { Component } from "react";
import "./pdm.css"

const Required = () => <span className="asm_required">*</span>;

export default class AsmForm extends React.Component {
    state = {
        error: null,
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // get the form fields from the event
        // fetch post data
        alert("Submitted");
    };

    handleClickCancel = () => {
        // this.props.history.push("/");
        alert("Cancelled");
    };

    render() {
        const { error } = this.state;
        return (
            <section className="asm_form">
                <h2>New Assembly</h2>
                <form
                    className="asm_form"
                    onSubmit={this.handleSubmit}
                >
                    <div className="asm_error" role="alert">
                        {error && <p>{error.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="an">
                            Asm. Number <Required />
                        </label>
                        <input
                            type="number"
                            name="an"
                            id="an"
                            placeholder="123456"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="desc">
                            Description <Required />
                        </label>
                        <input
                            type="text"
                            name="desc"
                            id="desc"
                            placeholder="999 30mm Gland 316"
                            required
                        />
                    </div>
                    <div>
                        <label className="contents" htmlFor="content">
							Contents (cs) <Required />
						</label>
                        <textarea
                            name="content"
                            id="content"
							cols="7"
							rows="10"
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
				<p>
					Please input all available information.<br/>
					The asm. number is a six-digit ID number.<br/>The description is a 
					component definition.<br/>The contents are a comma-separated list of 
					six-digit part numbers.
				</p>
            </section>
        );
    }
}
