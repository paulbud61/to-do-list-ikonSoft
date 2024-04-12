import React, { useState } from 'react';
import styles from './form.module.css';

export default function Form({ tasks, setTasks }) {
  const [task, setTask] = useState({ name: '', category: '', done: false });
  const categories = [
    'Personal',
    'Work',
    'Study',
    'Fitness',
    'Household',
    'Errands',
    'Social',
    'Health',
    'Finance',
  ];

  function handleSubmit(e) {
    e.preventDefault();
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setTask({ name: '', category: '', done: false });
  }

  return (
    <form className={styles.taskform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          onChange={e => setTask({ ...task, name: e.target.value })}
          value={task.name}
          type="text"
          placeholder="Enter task name"
        />
        <select
          className={styles.modernInput}
          onChange={e => setTask({ ...task, category: e.target.value })}
          value={task.category}
        >
          <option value="">Select category</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <button className={styles.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
