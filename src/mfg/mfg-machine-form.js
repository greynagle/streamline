import React, { Component } from "react";

const Required = () => <span className="machine_required">*</span>;

export default class MachineForm extends React.Component {
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
            <section className="machine_form">
                <h2>Add a new machine</h2>
                <form className="machine_form" onSubmit={this.handleSubmit}>
                    <div className="machine_error" role="alert">
                        {error && <p>{error.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="name">
                            Machine Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="e.g. Okuma"
                        />
                    </div>
                    <div>
                        <label htmlFor="type">
                            Machine Type <Required />
                        </label>
                        <input
                            type="text"
                            name="type"
                            id="type"
                            placeholder="M/T/B/L/O"
                            maxLength="1"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="tp">
                            Throughput <Required />
                        </label>
                        <input
                            type="number"
                            name="tp"
                            id="tp"
                            placeholder="e.g. 1.0"
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
					The machine name is used to identify the various machines.<br/>The machine
					type determines what type of operations the machine performs.<br/>The throughput
					determines how many components of complexity 1.0 can be processed per minute.
				</p>
            </section>
        );
    }
}
