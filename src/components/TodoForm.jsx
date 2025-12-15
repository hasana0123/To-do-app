import { useState, useEffect } from "react";
import styles from "../styles/components/TodoForm.module.scss";

const TodoForm = ({ initialValues, onSubmit }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("pending");
    const [image, setImage] = useState("");
    const [deadline, setDeadline] = useState("");

    useEffect(() => {
        if (initialValues) {
            setTitle(initialValues.title || "");
            setDescription(initialValues.description || "");
            setStatus(initialValues.status || "pending");
            setImage(initialValues.image || "");
            setDeadline(initialValues.deadline || "");
        }
    }, [initialValues]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => setImage(reader.result);
        reader.readAsDataURL(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim()) {
            alert("Title is required");
            return;
        }

        onSubmit({
            title,
            description,
            status,
            image,
            deadline,
        });
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
                <label>Title *</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>

            <div className={styles.field}>
                <label>Description</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>

            <div className={styles.field}>
                <label>Status</label>
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="pending">Pending</option>
                    <option value="ongoing">Ongoing</option>
                    <option value="completed">Completed</option>
                </select>
            </div>

            <div className={styles.field}>
                <label>Image</label>
                <input type="file" accept="image/*" onChange={handleImageChange} />
                {image && (
                    <div className={styles.imagePreview}>
                        <img src={image} alt="Preview" />
                    </div>
                )}
            </div>
            <div className={styles.field}>
                <label>Deadline</label>
                <input
                    type="date"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                />
            </div>


            <div className={styles.actions}>
                <button className={styles.submitBtn} type="submit">
                    Save Todo
                </button>
            </div>
        </form>
    );
};

export default TodoForm;
