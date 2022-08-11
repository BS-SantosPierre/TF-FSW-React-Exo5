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
			<div>
				<label htmlFor="name" className="block text-sm font-medium text-gray-700">
					Name
				</label>
				<div className="mt-1">
					<input
						type="text"
						name="name"
						id="name"
						value={name}
          	onChange={({ target }) => setName(target.value)}
						className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
					/>
				</div>
    	</div>
			<div>
				<label htmlFor="description" className="block text-sm font-medium text-gray-700">
					Description
				</label>
				<div className="mt-1">
					<textarea
						rows={4}
						name="description"
						id="description"
						className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
						defaultValue={''}
						value={description}
          	onChange={({ target }) => setDescription(target.value)}
					/>
				</div>
    	</div>
			<div>
				<label htmlFor="location" className="block text-sm font-medium text-gray-700">
					Priority
				</label>
				<select
					id="location"
					name="location"
					className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
					value={priority}
          onChange={({ target }) => setPriority(target.value)}
				>
					<option value="low">low</option>
          <option value="normal">normal</option>
          <option value="high">high</option>
				</select>
    	</div>
			<button
        type="button"
        className="inline-flex justify-center items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
