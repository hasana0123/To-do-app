import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TodoCard from "../components/TodoCard";
import DeleteConfirm from "../components/DeleteConfirm";
import { getTodos, deleteTodo } from "../services/todoService";
import styles from "../styles/pages/TodoList.module.scss";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    setTodos(getTodos());
    setLoading(false);
  }, []);

  const openDeleteModal = (id) => {
    setSelectedId(id);
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    deleteTodo(selectedId);
    setTodos(getTodos());
    setShowModal(false);
    setSelectedId(null);
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
        <p className={styles.empty}>No todos yet. Create one</p>
      )}

      {!loading && todos.length > 0 && (
        <div className={styles.grid}>
          {todos.map((todo) => (
            <TodoCard
              key={todo.id}
              todo={todo}
              onDelete={() => openDeleteModal(todo.id)}
            />
          ))}
        </div>
      )}

      <DeleteConfirm
        isOpen={showModal}
        onCancel={() => setShowModal(false)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default TodoList;
