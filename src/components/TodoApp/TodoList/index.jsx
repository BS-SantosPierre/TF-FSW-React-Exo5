import TodoItem from '../TodoItem';

const TodoList = ({ todos, onDeleteTodo, onDoneTodo }) => {
  const todoList = todos.map((todo) => {
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
