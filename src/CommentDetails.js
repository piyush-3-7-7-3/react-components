import React from "react";
import { faker } from '@faker-js/faker';

const CommentDetails = function (props) {
    return (<div className='comments'>
        <a href='/' className='avatar'>
            <img alt='avatar' src={faker.image.avatar()} style={{ height: '50px', width: '50px' }}></img>
        </a>
        <div className='content'>
            <a href='/' className='author'>{props.author}</a>
            <div className='metadata'>
                <span className='date'>{props.timeAgo}</span>
            </div>
        </div>
        <div className='text'>{props.commentSaid}</div>
    </div>)
}

export default CommentDetails;