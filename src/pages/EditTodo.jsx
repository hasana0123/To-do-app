import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTodoById, updateTodo } from "../services/todoService";
import TodoForm from "../components/TodoForm";
import Loading from "../components/Loading";
import styles from "../styles/pages/EditTodo.module.scss";

const EditTodo = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      const existingTodo = getTodoById(Number(id));
      if (!existingTodo) {
        setError("Todo not found");
      } else {
        setTodo(existingTodo);
      }
    } catch {
      setError("Failed to load todo");
    } finally {
      setLoading(false);
    }
  }, [id]);

  const handleSubmit = (updatedData) => {
    try {
      updateTodo({ ...todo, ...updatedData });
      navigate("/todos");
    } catch {
      setError("Failed to update todo");
    }
  };

  if (loading) return <Loading />;

  if (error) {
    return <p className={styles.notFound}>{error}</p>;
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Edit Todo</h1>
      <TodoForm initialValues={todo} onSubmit={handleSubmit} />
    </div>
  );
};

export default EditTodo;
