import React from 'react'
import Home from './component/Home'
import PostList from './component/PostList'
import ShowListPost from './component/PostListShow'
import {BrowserRouter,Route,Link} from 'react-router-dom'

function App(props)
{
    return(
        <BrowserRouter>
            <div>
                <h2>Hello React App!!!</h2>
                <Link to='/'>Home</Link>-
                <Link to='/postlist'>Posts</Link>

                <Route path='/' component={Home} exact={true}/>
                <Route path='/postlist' component={PostList} exact={true}/>
                <Route path='/posts/:postId' component={ShowListPost}/>
            </div>
        </BrowserRouter>
    )
}

export default App