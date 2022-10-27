import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };

    }

    ageHandler = () => {
        this.setState({
            age: this.state.age + 1
        })
    }

    render() {
        return (
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <p><button onClick={this.ageHandler}>Birthday Button for {this.props.firstName} {this.props.lastName}  </button></p>

            </div>
        )
    }
}
export default PersonCard;
// Create a component called PersonCard that accepts the following props:

// firstName
// lastName
// age
// hairColor
// Then, display four PersonCard components that show four different people, using props.