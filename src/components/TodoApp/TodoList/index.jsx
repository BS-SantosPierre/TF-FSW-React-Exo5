import TodoItem from '../TodoItem';

const TodoList = ({ todos, onDeleteTodo, onDoneTodo, filter }) => {
  const todoList = todos
		.filter((todo) => (filter === 'all' ? true : todo.priority === filter))
		.map((todo) => {
			return (
				<TodoItem
					key={todo.id}
					todo={todo}
					onDeleteTodo={onDeleteTodo}
					onDoneTodo={onDoneTodo}
				/>
			);
  });

  return <ul>{todoList}</ul>;
};

export default TodoList;
