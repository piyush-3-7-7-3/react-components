// Importing libraries
import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetails from './CommentDetails'
import { faker } from '@faker-js/faker';

// Create a react component
const App = function () {
    return (
        <div>
            <div className='ui container comments'>
                <CommentDetails author="Sam" timeAgo="6:40 PM" commentSaid="LOL" avatar={faker.image.avatar()} />
                <CommentDetails author="Alex" timeAgo="5:40 PM" commentSaid="Nice Work" avatar={faker.image.avatar()} />
                <CommentDetails author="Bem" timeAgo="2:10 AM" commentSaid="Keep it work" avatar={faker.image.avatar()} />
                <CommentDetails author="James" timeAgo="3:10 AM" commentSaid="I am a comment nothing else" avatar={faker.image.avatar()} />
            </div>
        </div>
    )
}

// Render the app component
ReactDOM.render(<App />, document.querySelector('#root'))