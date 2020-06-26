import React, { Component } from "react";
import "./pdm.css";

const Required = () => <span className="prt_required">*</span>;

export default class PrtForm extends React.Component {
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
        alert("Cancelled");
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
                        <label htmlFor="pn">
                            Part Number <Required />
                        </label>
                        <input
                            type="number"
                            name="pn"
                            id="pn"
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
                        <label htmlFor="so">
                            Stock Origin <Required />
                        </label>
                        <input
                            type="text"
                            name="so"
                            id="so"
                            placeholder="316 UNS S31600, ASTM A276"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="mc">
                            Machine Code <Required />
                        </label>
                        <input
                            type="text"
                            name="mc"
                            id="mc"
                            placeholder="e.g. M/T"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="comp">
                            Complexity <Required />
                        </label>
                        <input
                            type="number"
                            name="comp"
                            id="comp"
                            placeholder="1.00"
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
                    <p>
                        Please input all available information.
                        <br />
                        The part number is a six-digit ID number.
                        <br />
                        The description is a component definition.
                        <br />
                        The stock origin is the type of raw material used.
                        <br />
                        The machine code dictates what machines process the
                        component.
                        <br />
                        The complexity is a measure of minutes to machine from
                        stock.
                    </p>
                </div>
            </section>
        );
    }
}
