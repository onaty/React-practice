import React, { Component } from 'react';
// import axios from 'axios'
import { connect } from 'react-redux'

import { deletePost } from '../actions/postActions'
class Posts extends Component {
    // state = {
    //     post: null
    // }

    // componentDidMount(){
    //     console.log(this.props)
    //     let id=this.props.match.params.post_id
    //     this.setState({
    //         id
    //     })

    //     axios.get('https://jsonplaceholder.typicode.com/posts/'+id).then((res) => {
    //         // console.log(res)
    //         this.setState({
    //             post: res.data
    //         })
    //     })
    // }
    handleClick=()=>{
        this.props.deletePost(this.props.post.id)
        this.props.history.push('/')
    }
    render() {
        console.log(this.props)

       
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="cent">
                    <button className="btn grey" onClick={this.handleClick}>
                        Delete post
                    </button>
                </div>
            </div>
        ) :
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

const mapstatetoprops = (state, ownProps) => {

    let id = ownProps.match.params.post_id

    return {
        post: state.posts.find(post => post.id == id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      deletePost: (id) => dispatch(deletePost(id))
    }
  }
export default connect(mapstatetoprops,mapDispatchToProps)(Posts);