import React, { Component } from 'react';

class Ninjas extends Component {
    state = {}
    render() {
const{name,age,belt}=this.props
        console.log(this.props)
        return (
            <div className="Ninjas">
                <h1>My name is {name}</h1>
                <h4>I am {age} yars old</h4>
                <h5>I use a {belt} belt</h5>
            </div>
        );
    }
}

export default Ninjas;