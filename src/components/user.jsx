import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
class user extends React.Component {
    constructor(props){
        super(props)
        this.state={
            customers : [],
            errorMsg : ""
        };
    }

    componentDidMount(){
        console.log("componentDidMount()");
        const dataUrl = `http://localhost:9090/users/getAllUser`;
        axios.get(dataUrl).then((response) => {
            this.setState({
                ...this.state,
                customers : response.data
            })
        }).catch((error) => {
            this.setState({
                ...this.state,
                errorMsg : error.message
            });
        })
    }

    deleteCustomer = (id) => {
        const dataUrl = `http://localhost:9090/users/deleteUser/${id}`;
        axios.delete(dataUrl).then((response) => {
            const customer = this.state.customers.filter((c) => c.id !== id);
            this.setState({
                ...this.state,
                customers : customer
            });
            alert(response.data.username + " delete successfully !!!");
        }).catch((error) => {
            this.setState({
                ...this.state,
                errorMsg : error.message
            });
        })
    }

    render() { 
        let {customers} = this.state;
        return (
            <section className="landing">
                <div className="wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Link
                                    to="/customer/add"
                                    className="btn btn-success mt-3 btn-md float-end mb-3"
                                >
                                    <i class="fas fa-user"/>&nbsp;&nbsp;
                                    Add user
                                </Link>
                                <table className="table table-condensed table-sm table-light table-hover table-striped text-center border-warning">
                                    <thead className="table table-warning">
                                        <tr>
                                            <th>userId</th>
                                            <th>password</th>
                                            <th>role</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {customers.length > 0 &&
                                            customers.map((customer) => {
                                                return (
                                                    <tr>
                                                        <td>{customer.id}</td>
                                                        <td>
                                                            {customer.password}
                                                        </td>
                                                        <td>
                                                            {
                                                                customer.role
                                                            }
                                                        </td>
                                                       
                                                       
                                                        <td>
                                                            <button className="btn btn-sm btn-outline-success">
                                                                <i class="fas fa-edit" />
                                                                &nbsp;&nbsp;
                                                                Update
                                                            </button>

                                                            <button
                                                                className="btn btn-sm btn-outline-danger"
                                                                onClick={() =>
                                                                    this.deleteCustomer(
                                                                        customer.id
                                                                    )
                                                                }
                                                            >
                                                                <i class="fas fa-trash" />
                                                                &nbsp;&nbsp;
                                                                Delete
                                                            </button>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
} 
export default user;