import React, { Component } from 'react';
import Businesscard from './businesscard';

class Pm_number4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            register: false,
            fname: "",
            lname: "",
            add: "",
            email: "",
            number: ""

        }
    }

    inputHandler = (e) => {
        e.preventDefault();
        const { fname, lname, add, email, number } = this.state;
        if (fname === "" || lname === "" || add === "" || email === "" || number === "") {
            this.setState({ register: false });
            alert(" Some field  is empty. Fill up again")
        }
        else {
            this.setState({ register: true });
            alert("Succesfully register")


        }
    }


    render() {
        const { register } = this.state;
        if (!register) {
            return (
                <div>
                    <center>
                        <div>
                            <h1>Sign Up Form</h1>
                            Firstname:&nbsp;
                        <input type="text" placeholder="firstname" onChange={(e) => this.setState({ fname: e.target.value })}></input><br /><br />
                            Last Name:&nbsp;
                        <input type="text" placeholder="lastname" onChange={(e) => this.setState({ lname: e.target.value })}></input><br /><br />
                            Address:&nbsp;
                        <input type="text" placeholder="address" onChange={(e) => this.setState({ add: e.target.value })}></input><br /><br />
                            Email:&nbsp;
                        <input type="email" placeholder="email" onChange={(e) => this.setState({ email: e.target.value })}></input><br /><br />
                            Phone number:&nbsp;
                        <input type="text" placeholder="number" onChange={(e) => this.setState({ number: e.target.value })}></input><br /><br />
                        </div>
                        <div>
                            <button type="submit" onClick={(e) => this.inputHandler(e)}>Register </button>
                        </div>
                    </center>
                </div>
            )
        }
        else {
            return (
                <div>
                    <Businesscard fname={this.state.fname} lname={this.state.lname} add={this.state.add}
                        email={this.state.email} number={this.state.number} />
                </div>
            )
        }

    }
}
export default Pm_number4;