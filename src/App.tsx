import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Loader from './components/Loader';
import Todo from './components/Todo';
const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState({});

  interface Todo {
    title: string;
    id: number;
    completed: boolean;
  }

const handleCompleted = (index: number) => {
  const newTodos = [...todos];
  newTodos[index].completed = !newTodos[index].completed
  setTodos(newTodos)
}


  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/1/todos')
      .then(response => response.data)
      // .then (res => console.log(res))
      .then(res => setTodos(res))

      .catch(err => setError(err))
  }, [])

  // console.log(todos)
  // [] = in useEffect={ is called dependency array}
  return (
    <div className="App">
      {
        todos.length > 0 ? todos.map((todo: Todo, index:number) =>
          <div key={index}>
            <Todo todo={todo} index={index} handleCompleted={handleCompleted}/>
          </div>
        ) : (
          <>
            <Loader />
          </>
        )
      }
    </div>
  )
}

export default App
