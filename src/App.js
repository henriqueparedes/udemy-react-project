import logo from './logo.svg';
import './App.css';

import Comment from './components/comment.js'

function App() {
  return (
    <div className="App">
      <h1>Meu projeto</h1>
      <Comment/>
      <Comment/>
      <Comment/>
    </div>
  );
}

export default App;
