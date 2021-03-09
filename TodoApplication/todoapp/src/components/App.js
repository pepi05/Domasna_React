import { useState } from 'react';
import TodoList from '../components/TodoList'

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, task: "Listen React Course", done: false },
    { id: 2, task: "Eat Dinner", done: false },
    { id: 3, task: "Go to Sleep", done: false }
  ]);

  // Function
  const selectTodoAsDone = (index) => {
    let newTodoList = todos.map((todo, id) => {
      if(index === id) {
        return {
          ...todo,
          done: !todo.done
        }
      } else {
        return todo
      }
    })
    setTodos(newTodoList)
  }

  return (
    <div className="App">
    <TodoList todos={todos} toggle={selectTodoAsDone}/>
    </div>
  );
}

export default App;
