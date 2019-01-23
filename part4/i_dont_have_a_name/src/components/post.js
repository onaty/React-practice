import React, { Component } from 'react';

class Posts extends Component {
    state = {
        id:null
      }

componentDidMount(){
    console.log(this.props)
    let id=this.props.match.params.post_id
    this.setState({
        id
    })
}

    render() { 
        return ( 
            <div className="container">
                <h4>route parameterx{this.state.id} </h4>
            </div>
         );
    }
}
 
export default Posts;