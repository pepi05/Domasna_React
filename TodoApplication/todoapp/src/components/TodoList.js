import '../assets/styles/todoCheckbox.css'

const TodoList = (props) => {
    return (
        <div>
            {props.todos.map((todo, index) => {
                return(
                    <>
                    <Todo key={todo.id} index={index} todo={todo} toggleTodo={props.toggle}/>
                    </>
                )
            })}
        </div>
    )
}


const Todo = (props) => {
    const toggleTodoStatus = () => {
        props.toggleTodo(props.index);
    }
    return (
       <p className= {props.todo.done ? 'checked' : 'todo'}>
           <input type='checkbox' checked={props.todo.done} value={props.todo.done} onChange={toggleTodoStatus}>
           </input>
           <span>{props.todo.task}</span>
       </p> 
    )
}

export default  TodoList;