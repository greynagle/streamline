import React, { Component } from "react";

const Required = () => <span className="routing_required">*</span>;

export default class RoutingForm extends React.Component {
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
            <>
                <section className="routing_form">
                    <h2>New Route Plan</h2>
                    <form className="routing_form" onSubmit={this.handleSubmit}>
                        <div className="routing_error" role="alert">
                            {error && <p>{error.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="content">
                                Asm. Numbers <Required />
                            </label>
                            <textarea
                                className="routing_textarea"
                                name="asm"
                                id="asm"
                                cols="7"
                                rows="1"
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
                <br />
                <section className="routing_report">
                    Machine usage:
                    <table className="routing_machine_table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Time (min)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>HAAS</td>
                                <td>M</td>
                                <td>1.2</td>
                            </tr>
                            <tr>
                                <td>Okuma</td>
                                <td>M</td>
                                <td>3.6</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </>
        );
    }
}
