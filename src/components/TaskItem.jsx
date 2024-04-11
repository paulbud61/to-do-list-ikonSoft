import styles from "./taskItem.module.css";

export default function TaskItem({ item, tasks, setTasks }) {
  function handleDelete(item) {
    setTasks(tasks.filter((task) => task !== item));
  }

  function handleClick(name) {
    setTasks(
      tasks.map((task) =>
        task.name === name ? { ...task, done: !task.done } : task
      )
    );
  }

  function handleEdit(item) {
    const editedName = prompt("Enter the new name for the task:");
    if (editedName !== null && editedName.trim() !== "") {
      setTasks(
        tasks.map((task) =>
          task === item ? { ...task, name: editedName } : task
        )
      );
    }
  }

  const className = item.done ? styles.completed : "";

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={className} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>

        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            X
          </button>
          <button
            onClick={() => handleEdit(item)}
            className={styles.editButton}
          >
            Edit
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
