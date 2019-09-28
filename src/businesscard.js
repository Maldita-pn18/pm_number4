import React, { Component } from 'react';

class Businesscard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <center>
                <div>   
                    <h1> Business Card </h1>
                    <h2>Name: {this.props.lname}, {this.props.fname} </h2>
                    <h2> Address: {this.props.add} </h2>
                    <h2> Email: {this.props.email} </h2>
                    <h2> Number:  {this.props.number} </h2>

                </div>
            </center>
        )
    }
}




export default Businesscard;