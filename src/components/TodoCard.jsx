import { useState } from "react";
import { Link } from "react-router-dom";
import { Pencil, Trash2, X } from "lucide-react";
import Status from "./Status";
import placeholder from "../assets/placeholder.svg";
import styles from "../styles/components/TodoCard.module.scss";

const TodoCard = ({ todo, onDelete }) => {
  const [open, setOpen] = useState(false);

  const statusClass = styles[todo.status];

  const getDeadlineStatus = (deadline, status) => {
    if (!deadline || status === "completed") return null;

    const today = new Date();
    const due = new Date(deadline);
    const diffDays = Math.ceil((due - today) / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return "overdue";
    if (diffDays <= 2) return "near";
    return null;
  };

  const deadlineStatus = getDeadlineStatus(todo.deadline, todo.status);

  return (
    <>
      <div
        className={`${styles.card} ${statusClass}`}
        onClick={() => setOpen(true)}
      >
        <img src={todo.image || placeholder} alt={todo.title} />

        <div className={styles.content}>
          <h3>{todo.title}</h3>
          <Status status={todo.status} />

          {todo.deadline && (
            <p className={`${styles.deadline} ${styles[deadlineStatus]}`}>
              Deadline: {todo.deadline}
            </p>
          )}
        </div>

        <div
          className={styles.actions}
          onClick={(e) => e.stopPropagation()}
        >
          <Link to={`/todos/${todo.id}/edit`}>
            <Pencil size={18} />
          </Link>
          <button onClick={onDelete}>
            <Trash2 size={18} />
          </button>

        </div>
      </div>

      {open && (
        <div className={styles.overlay} onClick={() => setOpen(false)}>
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.close} onClick={() => setOpen(false)}>
              <X size={20} />
            </button>

            <img src={todo.image || placeholder} alt={todo.title} />

            <h2>{todo.title}</h2>
            <Status status={todo.status} />

            {todo.deadline && (
              <p className={`${styles.deadline} ${styles[deadlineStatus]}`}>
                Deadline: {todo.deadline}
              </p>
            )}

            {todo.description && (
              <p className={styles.description}>{todo.description}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default TodoCard;
