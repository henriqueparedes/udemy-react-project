import React from 'react';
import {formatRelative} from 'date-fns';
import { ptBR } from 'date-fns/locale';

import '../css/comment.css';
import userImage from '../images/user.png';

const Comment = (props) => {
    return(
    <div className="Comment">
        <img className="avatar" src={userImage} alt={props.name}/>
        <div className="content">
            <h2 className="name">{props.name}</h2>
            <p className="email">{props.email}</p>
            <p className="Message">{props.children}</p>
            <p className="date">{formatRelative(props.date, new Date(), {locale: ptBR})}</p>
            <button onClick={props.onRemove}>&times;</button>
        </div>
    </div>
    )
};

export default Comment;