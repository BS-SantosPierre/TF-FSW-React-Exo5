import { nanoid } from "nanoid";
import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const todoItems = [
	{
		id: nanoid(),
		name: 'Apprendre React JS',
		description: 'Approfondir les bases',
		priority: 'high',
		done : false
	},
	{
		id: nanoid(),
		name: 'Apprendre Node JS',
		description: 'Approfondir les bases',
		priority: 'normal',
		done : false
	},
];

const TodoApp = () => {
	const [todos, setTodos] = useState(todoItems);
	const [filter, setFilter] = useState('all');

	const addTodo = (todo) => {
		setTodos([
			...todos,
			{
				...todo,
				id: nanoid(),
				done: false
			}
		]);
	};

	const deleteTodo = (id) => {
		const newTodos = todos.filter((todo) => todo.id !== id);
		setTodos(newTodos);
	}

	const doneTodo = (id) => {
		const newTodos = todos.map((todo) => {
			if (id === todo.id) {
				return {...todo, done: true};
			}else {
				return todo;
			}
		});
		setTodos(newTodos);
	}

	return <div className="min-h-screen max-w-5xl mx-auto">
		<TodoForm onAddTodo={addTodo}/>
		<div className="my-5 flex justify-center">
			<span className="relative z-0 inline-flex shadow-sm rounded-md">
				<button
					type="button"
					className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
					onClick={() => setFilter('all')}
				>
					All
				</button>
				<button
					type="button"
					className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
					onClick={() => setFilter('low')}
				>
					Low
				</button>
				<button
					type="button"
					className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
					onClick={() => setFilter('normal')}
				>
					Normal
				</button>
				<button
					type="button"
					className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
					onClick={() => setFilter('high')}
				>
					High
				</button>
			</span>
		</div>
		<TodoList todos={todos} filter={filter} onDeleteTodo={deleteTodo} onDoneTodo={doneTodo}/>
	</div>
}

export default TodoApp;
