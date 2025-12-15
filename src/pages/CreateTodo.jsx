import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoForm from "../components/TodoForm";
import { addTodo } from "../services/todoService";
import Loading from "../components/Loading";
import styles from "../styles/pages/CreateTodo.module.scss";

const CreateTodo = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (todoData) => {
    try {
      setLoading(true);
      setError("");

      await new Promise((res) => setTimeout(res, 800));

      addTodo({
        id: Date.now(),
        ...todoData,
      });

      navigate("/todos");
    } catch {
      setError("Failed to create todo");
      setLoading(false);
    }
  };

  if (loading) return <Loading text="Creating todo..." />;

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Create Todo</h1>
      {error && <p className={styles.error}>{error}</p>}
      <TodoForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateTodo;
