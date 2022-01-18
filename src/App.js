import './css/App.css';

import Comment from './components/comment.js'

function App() {
  return (
    <div className="App">
      <h1>Meu projeto</h1>
      <Comment name="João" email="joao@mail.com" date={new Date(2020, 3, 19)}>
        Olá, tudo bem?
      </Comment>

      <Comment name="Maria" email="maria@mail.com" date={new Date(2020, 3, 21)}>
        Olá, tudo bem sim...
      </Comment>
    </div>
  );
}

export default App;
