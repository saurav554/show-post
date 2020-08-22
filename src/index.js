import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import configureStore from './store/ConfigureStore'
import  {Provider} from 'react-redux'
import { startGetPosts } from './actions/postsAction'

const store=configureStore()
console.log(store.getState())

store.subscribe(() => {
    console.log(store.getState())
})
store.dispatch(startGetPosts())

const jsx=(
    <Provider store={store}>
        <App/>
    </Provider>
)
ReactDOM.render(jsx,document.getElementById('root'))