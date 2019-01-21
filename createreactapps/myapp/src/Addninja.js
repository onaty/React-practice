import React, { Component } from 'react';

class AddNinja extends Component {
    state = {
        name:null,
        age:null,
        belt:null
    }

    handlechange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handlesubmit=(e)=>{
        e.preventDefault()
        console.log(this.state)
    this.props.AddNinja(this.state)

    }

    render() {
        return (
            <div >
                <form onSubmit={this.handlesubmit}>
                    <label htmlFor="name"> Name:</label>
                    <input onChange={this.handlechange} type="text" id="name" />
                    <label htmlFor="age"> Age:</label>
                    <input onChange={this.handlechange} type="text" id="age" />
                    <label htmlFor="belt"> belt:</label>
                    <input onChange={this.handlechange} type="text" id="belt" />
                    <button>Submit</button>
                </form>
            </div>);
    }
}

export default AddNinja;