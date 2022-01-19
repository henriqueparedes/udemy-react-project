import React, { Component } from 'react'
import './css/App.css';

import Comment from './components/comment.js'

class App extends Component {

  state = {
    comments:[
      {
        name: 'Joao',
        email: 'joao@mail.com',
        date: new Date(2020, 3, 19),
        message: 'Olá, tudo bem?'
      },
      {
        name: 'Maria',
        email: 'maria@mail.com',
        date: new Date(2020, 3, 21),
        message: 'Olá, tudo bem sim!!'
      },
    ]
  }

  addComment = () => {

    const newComment = {
      name: 'Pedro',
      email: 'pedro@mail.com',
      date: new Date(),
      message: 'Olá Pessoal!!'
    }

    this.setState({comments: [...this.state.comments, newComment]})

  }

  render() {
    return (
      <div className="App">
        <h1>Meu projeto</h1>

        {this.state.comments.map((comment, index) => {
        return(
        <Comment 
        key={index}
        name={comment.name}
        email={comment.email}
        date={comment.date}>
          {comment.message}
        </Comment>)
        })}

        <button onClick={this.addComment}>Adicionar um comentário</button>
      </div>
    );
  }
}

export default App;
