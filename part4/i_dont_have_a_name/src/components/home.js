import React, { Component } from 'react';
// import axios from 'axios'
import {Link} from 'react-router-dom'
import Pokeball from '../pokeball.png'
import {connect} from 'react-redux'


class Home extends Component {
    // state = {
    //     posts: []
    // }
    // componentDidMount() {
    //     axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
    //         // console.log(res)
    //         this.setState({
    //             posts: res.data.slice(0, 10)
    //         })
    //     })
    // }
    render() {

console.log(this.props)
        const { posts } = this.props

        const postlist = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <img src={Pokeball} alt="pokeball mom"/>
                        <div className="card-content">
                            <Link to={'/'+post.id}>
                            <span className="card-title red-text">{post.title}</span>
                            </Link>

                            
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) :
            (
                <p className="center">No posts yet</p>
            )

        return (
            <div className="container">
                {postlist}
            </div>
        );
    }
}

const mapstatetoprops=(state)=>{
return{
    posts:state.posts
}
}

export default connect(mapstatetoprops)(Home);