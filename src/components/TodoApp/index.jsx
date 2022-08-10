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
		<TodoList todos={todos} onDeleteTodo={deleteTodo} onDoneTodo={doneTodo}/>
	</div>
}

export default TodoApp;
