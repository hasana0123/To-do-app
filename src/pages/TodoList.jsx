import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TodoCard from "../components/TodoCard";
import { getTodos, deleteTodo } from "../services/todoService";
import styles from "../styles/pages/TodoList.module.scss";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTodos(getTodos());
    setLoading(false);
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this todo?")) {
      deleteTodo(id);
      setTodos(getTodos());
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.title}>Todos</h1>
        <Link to="/todos/create" className={styles.createBtn}>
          + Create Todo
        </Link>
      </div>

      {loading && <p className={styles.loading}>Loading...</p>}

      {!loading && todos.length === 0 && (
        <p className={styles.empty}>No todos yet. Create one </p>
      )}

      {!loading && todos.length > 0 && (
        <div className={styles.grid}>
          {todos.map((todo) => (
            <TodoCard
              key={todo.id}
              todo={todo}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoList;
