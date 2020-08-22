import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
class ShowListPost extends React.Component
{
    
    render() {
        console.log('post',this.props.posts)
        return (
            <div>
                <h2>USER NAME:- {this.props.posts.find(post=>post.id==this.props.match.params.postId)?.id}</h2>
                <h2>TITLE :-{this.props.posts.find(post=>post.id==this.props.match.params.postId)?.title}</h2>
                <h2>BODY:- {this.props.posts.find(post=>post.id==this.props.match.params.postId)?.body}</h2>
                <p><Link to='/postlist'>Back</Link></p>
            </div> 
        )
    }
}
const mapStateToProps=(state,props)=>{
    const id=props.match.params.postId
    console.log('id',id)
    return {
         posts:state.posts
    }
}

export default connect(mapStateToProps)(ShowListPost)