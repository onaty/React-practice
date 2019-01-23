import React from 'react'

const Rainbow =(Wrappercomponent)=>{
const colors =['red','orange','pink','blue','green','yellow']
const randomcolor =colors[Math.floor(Math.random()*5)]
const className=randomcolor+'-text'

return (props)=>{
    return(
        <div className={className}>
            <Wrappercomponent {...props}/>
            </div>
    )
}
}

export default Rainbow