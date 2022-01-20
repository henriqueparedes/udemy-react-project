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
    ],
    newComment: {
      name: '',
      email: '',
      message: ''
    }
  }

  addComment = (event) => {

    event.preventDefault();

    const newComment = {...this.state.newComment, date: new Date()}

    this.setState({
      comments: [...this.state.comments, newComment],
      newComment: {name: '', email:'', message:''}
    })
  }

  removeComment = (comment) => {
    let list = this.state.comments;
    list = list.filter(c => c !== comment)
    this.setState({comments: list})
  }

  handler = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({newComment: {...this.state.newComment, [name]:value}})
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
        date={comment.date}
        onRemove={this.removeComment.bind(this, comment)}>
          {comment.message}
        </Comment>)
        })}

        <form className="new-comment" method="post" onSubmit={this.addComment}>
          <h2>Adicionar Comentários</h2>
          <div>
            <input 
            type="text" 
            name="name" 
            value={this.state.newComment.name}
            onChange={this.handler}
            placeholder='Digite seu nome'
            required/>
          </div>
          <div>
            <input 
            type="email" 
            name="email"
            value={this.state.newComment.email}
            onChange={this.handler}
            placeholder='Digite seu email'
            required/>
          </div>
          <div>
            <textarea 
            name="message"
            value={this.state.newComment.message}
            onChange={this.handler}
            rows="4"
            required/>
          </div>
          <button type="submit">Adicionar comentário</button>
        </form>
      </div>
    );
  }
}

export default App;
