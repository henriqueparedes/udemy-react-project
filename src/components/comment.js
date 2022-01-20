import React from 'react';
import '../css/comment.css';

const Comment = (props) => {
    return(
    <div className="Comment">
        <h2>{props.name}</h2>
        <p>{props.mail}</p>
        <p>{props.children}</p>
        <p>{props.date.toString()}</p>
        <button onClick={props.onRemove}>&times;</button>
    </div>
    )
};

export default Comment;