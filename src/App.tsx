import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
const App = () => {
  const [ todos, setTodos ] = useState([]);
  const [ error, setError ] = useState({});

  interface Todo {
    title: string;
    id: number;
    completed: boolean;
  }
  useEffect (() => {
    axios.get('https://jsonplaceholder.typicode.com/users/1/todos')
    .then(response => response.data)
    // .then (res => console.log(res))
    .then( res => setTodos(res))
    
    .catch (err => setError(err))
  }, [])
  
  // console.log(todos)
  // [] = in useEffect={ is called dependency array}
  return (
    <div className="App">
      {
        todos.length > 0 ? todos.map((todo:Todo , index) => 
        <div key={index}>
        {todo.title}
        </div>
        ) : (
          <>
          Loading... 
          </>
        )
      }
    </div>
  )
}

export default App
