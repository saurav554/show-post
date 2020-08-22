import {connect} from 'react-redux'
import {startGetPosts} from '../actions/postsAction'
import React from 'react'
import {Link} from 'react-router-dom'

class PostList extends React.Component
{
    constructor(){
        super()
        this.state={
            search:'',
            newData:[]
        }
    }
    handleSearch=(e)=>{
        let data=this.props.posts.filter(post=>post.title.includes(e.target.value))
        this.setState({
            search:e.target.value,
            newData:data
        })
    }
    componentDidMount()
    {
        if(this.props.posts.length===0)
        {
            this.props.dispatch(startGetPosts())
        }
    }
    render()
    {
        // console.log(this.props.posts)
        return(
        <div>   
            <input type='search' onChange={this.handleSearch} placeholder='search title'></input>
            {
                this.state.newData.length==0 ? (
                    <div>
                        <h2>Total Posts - {this.props.posts.length}</h2>
                        <ul>
                        {
                            this.props.posts.map((ele,i)=>{
                                return (<li key={i}><Link to={`/posts/${ele.id}`}>{ele.title}</Link></li>)
                            })
                        }
                        </ul>
                    </div>
                ):(
                    <div>
                         <ul>
                        {
                            this.state.newData.map((ele,i)=>{
                                return (<li key={i}><Link to={`/posts/${ele.id}`}>{ele.title}</Link></li>)
                            })
                        }
                        </ul>
                    </div>
                )
            }
            
        </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        
        posts:state.posts
    }
}

export default connect(mapStateToProps)(PostList)