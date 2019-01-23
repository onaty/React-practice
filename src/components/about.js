import React from 'react';
import Rainbow from '../hoc/rainbow';

const About =()=>{
return (
    <div className="container">
        <h4 className="center">About Page</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin urna mi, semper eu lorem et, convallis commodo erat. Phasellus a massa tempor, imperdiet nulla ac, ullamcorper sem. In non ullamcorper nisi. Aenean mattis vestibulum ante, eget dictum eros fermentum non. Vestibulum mollis ligula turpis, nec luctus magna placerat eu. Curabitur fringilla mollis arcu, fermentum rutrum ligula vulputate non. Duis nunc elit, placerat in leo non, rhoncus congue ipsum. Proin nec placerat ipsum. Vestibulum id ex quis enim pulvinar vulputate ut ac orci. In hac habitasse platea dictumst. </p>
    </div>
)
}


export default Rainbow(About);