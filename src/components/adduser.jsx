import React from 'react';
import axios from 'axios';
// import { Joi } from 'joi-browser';

class adduser extends React.Component {
    state = {
        customer: {
            userId: "",
           password:"",
           role:"",
        },
        errors: {},
        errorMsg: "",
    };

    // schema = {
    //     // username: Joi.string()
    //     //     .pattern(new RegExp('^[a-zA-Z0-9]{3,}$'))
    //     //     .required(),
    //     mobileNumber: Joi.string()
    //         .pattern(new RegExp("^[7-9][0-9]{9}$"))
    //         .required(),
    //     email: Joi.string()
    //         .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    //         .pattern(new RegExp("^[a-zA-Z]{3,}@[a-zA-Z]{2,}.[a-zA-Z]{2,}&"))
    //         .required(),
    //     accountNo: Joi.number()
    //         .integer()
    //         .required(),
    //     pan: Joi.string()
    //         .pattern(new RegExp("^[A-Z]{5}[0-9]{4}[A-Z]{1}$"))
    //         .required(),
    // };

    //validate method
    // validate = () => {
    //     const errors = {};
    //     const result = Joi.validate(this.state.customer, this.schema, {
    //         abortEarly: false
    //     });

    //     console.log(result);

    //     if (result.error != null)
    //         for (let item of result.error.details) {
    //             errors[item.path[0]] = item.message
    //         }
    //     return Object.keys(errors).length === 0 ? null : errors;
    // };

    updateInput = (event) => {
        this.setState({
            customer: {
                ...this.state.customer,
                [event.target.name]: event.target.value,
            },
        });
        // console.log(this.state.customer);
        // const customer = { ...this.state.customer };
        // customer[event.target.name] = event.target.value;
        // this.setState({
        //     customer: customer
        // });
        // console.log(customer);
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Handle Submit");

        // //validate before sending request
        // this.setState({
        //     errors: this.validate()
        // });
        // console.log(this.state.errors);

        // if (this.state.errors)
        //     return;

        // sending request
        const dataUrl = `http://localhost:9090/users/adduser`;
        axios
            .post(dataUrl, this.state.customer)
            .then((response) => {
                console.log(response.data);
                alert(
                    "Added Customer " +
                        this.state.customer.username +
                        " successfully !!!"
                );
                this.props.history.push("/customer");
            })
            .catch((error) => {
                this.setState({
                    ...this.state,
                    errorMsg: error.response.data.message,
                });
            });
    };

    render() {
        const { customer } = this.state;
        const { errors, errorMsg } = this.state;
        console.log(this.state.customer);
        return (
            <section className="landing">
                <div className="wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 mx-auto">
                                <div className="card mt-3">
                                    <div className="card-header bg-warning text-black text-center">
                                        <h4 className="fw-bolder">
                                            Add user
                                        </h4>
                                    </div>
                                    {errorMsg && (
                                        <div
                                            className="alert alert-danger"
                                            role="alert"
                                        >
                                            {errorMsg}
                                        </div>
                                    )}
                                    <form
                                        className="shadow p-3 mt-1 bg-warning rounded text-center"
                                        onSubmit={this.handleSubmit}
                                    >
                                        <div className="mb-2">
                                            <label
                                                htmlFor="userId"
                                                className="form-label fw-bold text-black"
                                            >
                                                UserId
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // placeholder="Username"
                                                id="userId"
                                                name="userId"
                                                value={customer.username}
                                                onChange={this.updateInput}
                                            />
                                            {errors && (
                                                <small>{errors.username}</small>
                                            )}
                                        </div>
                                        <div className="mb-2">
                                            <label
                                                htmlFor="mobileNum"
                                                className="form-label fw-bold text-black"
                                            >
                                                password
                                            </label>
                                            <input
                                                type="tel"
                                                className="form-control"
                                                // placeholder="Mobile Number"
                                                id="password"
                                                name="password"
                                                value={customer.mobileNumber}
                                                onChange={this.updateInput}
                                            />
                                            {errors && (
                                                <small>
                                                    {errors.mobileNumber}
                                                </small>
                                            )}
                                        </div>
                                        <div className="mb-2">
                                            <label
                                                htmlFor="role"
                                                className="form-label fw-bold text-black"
                                            >
                                                role
                                            </label>
                                            <input
                                                type="role"
                                                className="form-control"
                                                // placeholder="Email"
                                                id="role"
                                                name="role"
                                                value={customer.role}
                                                onChange={this.updateInput}
                                            />
                                            {errors && (
                                                <small>{errors.role}</small>
                                            )}
                                            </div>
                                          
                                          
                                               
                                            
                                          
                                       
                                        <div className="d-grid gap-2 mt-2">
                                            <button
                                                type="submit"
                                                className="btn btn-success btn-md text-black fw-bold"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default adduser;