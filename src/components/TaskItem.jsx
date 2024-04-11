import React from 'react';
import styles from './taskItem.module.css';

export default function TaskItem({ item, setTasks }) {
  function handleDelete() {
    setTasks(prevTasks => prevTasks.filter(task => task !== item));
  }

  function handleClick() {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task === item ? { ...task, done: !task.done } : task
      )
    );
  }

  function handleEdit() {
    const editedName = prompt('Enter the new name for the task:');
    if (editedName !== null && editedName.trim() !== '') {
      setTasks(prevTasks =>
        prevTasks.map(task =>
          task === item ? { ...task, name: editedName } : task
        )
      );
    }
  }

  const className = item.done ? styles.completed : '';

  return (
    <div className={styles.item}>
      <div className={styles.itemContent}>
        <span
          className={`${styles.itemName} ${className}`}
          onClick={handleClick}
        >
          {item.name}
        </span>
        <span className={styles.category}>{item.category}</span>
        <span className={styles.blueButton}>
          <button onClick={handleDelete} className={styles.deleteButton}>
            X
          </button>
          <button onClick={handleEdit} className={styles.editButton}>
            Edit
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
