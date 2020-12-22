import React from 'react'
import db from './firebase'

function Todo(props) {
    return (
        <div>
            <p>
            <li>{props.todo.todo}</li>
            <button onClick={event=> {db.collection('todos').doc(props.todo.id).delete()}}>Delete</button>
            </p>
        </div>
    )
}

export default Todo
