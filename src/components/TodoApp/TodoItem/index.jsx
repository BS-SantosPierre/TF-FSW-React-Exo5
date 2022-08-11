import styles from "./todo-item.module.css";

const TodoItem = ({ todo, onDeleteTodo, onDoneTodo }) => {
	return <li className={`${todo.done ? styles['todo-done'] : undefined} flex items-center`}>
		<div className="px-4 py-5 sm:px-6">
			<h3 className="text-lg leading-6 font-medium text-gray-900">{todo.name} {' '}
			{todo.priority === 'high' ? <span style={{color: 'red'}}>(Urgent)</span> : ''}</h3>
			<p className="mt-1 max-w-2xl text-sm text-gray-500">{todo.description}</p>
		</div>

		<div className="flex flex-col space-y-1">
			<button
				type="button"
				className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				onClick={() => { onDoneTodo(todo.id) }} disabled={todo.done}
			>
				Done
			</button>
			<button
				type="button"
				className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
				onClick={() => { onDeleteTodo(todo.id) }}
			>
				Delete
			</button>
		</div>
	</li>
}

export default TodoItem;
