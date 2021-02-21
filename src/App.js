import React from 'react';
import './App.css';
import Form from './form'
import Comments from './comments.jsx'

function App() {
  return (
    <div className="App">
      <h2>Add a new Comment</h2>
      <Form />
      <Comments />
    </div>
  );
}

export default App;
