import React, { Component } from 'react';

class Ninjas extends Component {
    state = {}
    render() {
        const { ninjas } = this.props
        var i=0;
        const ninjaList = ninjas.map(ninja => {
           
            ninja.id=i++;
            return <div key={ninja.id} className="ninjalist">
                <p>My name is {ninja.name}</p>
                <p>I am {ninja.age} yars old</p>
                <p>I use a {ninja.belt} belt</p>
            </div>
        })
        console.log(this.props)
        return <div className="ninja-list">

            {ninjaList}
        </div>
    }
}

export default Ninjas;