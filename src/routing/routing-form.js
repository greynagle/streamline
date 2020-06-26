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
                    <h2>Add a new route plan</h2>
                    <form className="routing_form" onSubmit={this.handleSubmit}>
                        <div className="routing_error" role="alert">
                            {error && <p>{error.message}</p>}
                        </div>
                        <div>
                            <label className="routing_label" htmlFor="asm">
                                Assembly Number <Required />
                            </label>
                            <textarea name="asm" id="asm" required />
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
                <p>
                    Assembly number is a comma-separated list of assemblies. The
                    test will use all available machines without preference.
                </p>
                <br />
                <section className="routing_report">
                    Machine usage:
                    <table className="routing_machine_table">
                        <thead>
                            <tr>
                                <th>Machine name</th>
                                <th>Machine type</th>
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
                    Plan result:
                    <table className="routing_plan_table">
                        <thead>
                            <tr>
                                <th>Number</th>
                                <th>Time (min)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>123456</td>
                                <td>2.6</td>
                            </tr>
                            <tr>
                                <td>234567</td>
                                <td>3.8</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </>
        );
    }
}
