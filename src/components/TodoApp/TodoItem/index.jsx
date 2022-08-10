import styles from "./todo-item.module.css";

const TodoItem = ({ todo, onDeleteTodo, onDoneTodo }) => {
	return <li className={todo.done ? styles['todo-done'] : undefined}>
		<h4>{todo.name} {' '}
			{todo.priority === 'high' ? <span style={{color: 'red'}}>(Urgent)</span> : ''}
		</h4>
		<p>{todo.description}</p>
		<button onClick={() => { onDoneTodo(todo.id) }} disabled={todo.done}>Done</button>
		<button onClick={() => { onDeleteTodo(todo.id) }}>Delete</button>
	</li>
}

export default TodoItem;
