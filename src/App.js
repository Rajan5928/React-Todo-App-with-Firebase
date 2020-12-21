import React, { useState,useEffect } from 'react';
import './App.css';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';


function App() {
  const [todos, setTodos] = useState(['Learn HTML', 'Learn CSS']);
  const [input, setInput] = useState('');
  useEffect(() => {
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapShot=>{
      setTodos(snapShot.docs.map(doc=>doc.data().todo))
    })
  }, [input])
  const addTodo = (event) => {
    // setTodos([...todos, input])
    event.preventDefault();
    db.collection('todos').add({
      todo:input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput("")
  }
  return (
    <div className="App">
      <h1>TODO App</h1>
      <form>
      <FormControl>
        <InputLabel>Write a TODO</InputLabel>
        <Input value={input} onChange={event => (
          setInput(event.target.value)
        )} aria-describedby="my-helper-text" />
      </FormControl>
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Add a TODO
        </Button>
      </form>
      <ol>
        {todos.map(todo => (
          <Todo todoItems={todo} />
        ))}
      </ol>
    </div>
  );
}

export default App;
