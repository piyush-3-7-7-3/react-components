// Importing libraries
import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetails from './CommentDetails'

// Create a react component
const App = function () {
    return (
        <div>
            <div className='ui container comments'>
                <CommentDetails author="Sam" timeAgo="6:40 PM" commentSaid="LOL"/>
                <CommentDetails author="Alex" timeAgo="5:40 PM" commentSaid="Nice Work"/>
                <CommentDetails author="Bem" timeAgo="2:10 AM" commentSaid="Keep it work"/>
                <CommentDetails author="James" timeAgo="3:10 AM" commentSaid="I am a comment nothing else"/>
            </div>
        </div>
    )
}

// Render the app component
ReactDOM.render(<App />, document.querySelector('#root'))