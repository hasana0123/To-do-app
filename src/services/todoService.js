const STORAGE_KEY = "todos";

export const getTodos = () => {
  const todos = localStorage.getItem(STORAGE_KEY);
  return todos ? JSON.parse(todos) : [];
};

export const saveTodos = (todos) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
};

export const addTodo = (todo) => {
  const todos = getTodos();
  todos.push(todo);
  saveTodos(todos);
};

export const updateTodo = (updatedTodo) => {
  const todos = getTodos().map(t => t.id === updatedTodo.id ? updatedTodo : t);
  saveTodos(todos);
};

export const deleteTodo = (id) => {
  const todos = getTodos().filter(t => t.id !== id);
  saveTodos(todos);
};

export const getTodoById = (id) => {
  return getTodos().find(t => t.id === id);
};
