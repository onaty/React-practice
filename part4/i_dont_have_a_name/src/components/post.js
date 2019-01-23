import React, { Component } from 'react';
import axios from 'axios'
class Posts extends Component {
    state = {
        post:null
      }

componentDidMount(){
    console.log(this.props)
    let id=this.props.match.params.post_id
    this.setState({
        id
    })

    axios.get('https://jsonplaceholder.typicode.com/posts/'+id).then((res) => {
        // console.log(res)
        this.setState({
            post: res.data
        })
    })
}

    render() { 
        const post= this.state.post ? (
            <div className="post">
                <h4 className="center">{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>
            </div>
        ):
        (
            <div className="center">
                loading content ...const.
            </div>
        )


        return ( 
            <div className="container">
                <div>{post} </div>
            </div>
         );
    }
}
 
export default Posts;