import React from 'react';
import './ninja.css'
const Ninjas = ({ninjas,deleteninja}) => {
    var i = 0;
    // var {ninjas}=props
    console.log(ninjas)

    const ninjaList = ninjas.map(ninja => {

        ninja.id = i++;
        return <div key={ninja.id} className="ninjalist">
            <p>My name is {ninja.name}</p>
            <p>I am {ninja.age} yars old</p>
            <p>I use a {ninja.belt} belt</p>
            <button onClick={()=>{deleteninja(ninja.id)}}>Delete ninja</button>
            <br/>
            <hr/>
        </div>
    })

    return (
        <div className="ninja-list">
            {ninjaList}
        </div>
    )
}




export default Ninjas;