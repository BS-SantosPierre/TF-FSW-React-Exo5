import { useState } from 'react';

const TodoForm = ({ onAddTodo }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('low');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo({
      name,
      description,
      priority,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center space-y-8"
    >
      <div className="inline-flex flex-col justify-center">
        <label
          htmlFor="name"
          className="block mb-1 font-semibold transition-colors duration-1000 cursor-pointer hover:text-red-500 md:bg-amber-700 "
        >
          Name
        </label>
        <input
          type="text"
          className="border border-indigo-500 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-700 w-96"
          id="name"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
      </div>
      <div className="inline-block">
        <label htmlFor="description" className="block mb-1 font-semibold">
          Description
        </label>
        <textarea
          className="border border-indigo-500 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-700 w-96"
          id="description"
          value={description}
          onChange={({ target }) => setDescription(target.value)}
        />
      </div>
      <div className="inline-block">
        <label htmlFor="priority">Priority</label>
        <select
          id="priority"
          value={priority}
          onChange={({ target }) => setPriority(target.value)}
        >
          <option value="low">low</option>
          <option value="normal">normal</option>
          <option value="high">high</option>
        </select>
      </div>
      <button>Add Todo</button>
    </form>
  );
};

export default TodoForm;
