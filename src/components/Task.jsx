import React, { useState } from 'react';
import Form from './Form';
import TaskName from './TaskName';
import Footer from './Footer';
import styles from './task.module.css'; // Importă fișierul CSS

export default function Task() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') {
      return task.done;
    } else if (filter === 'uncompleted') {
      return !task.done;
    }
    return true;
  });

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  return (
    <div className={styles.container}>
      {' '}
      {/* Aplică clasa pentru container */}
      <Form tasks={tasks} setTasks={setTasks} />
      <div className={styles.filterContainer}>
        {' '}
        {/* Aplică clasa pentru containerul de filtre */}
        <label>
          <input
            type="radio"
            name="filter"
            value="all"
            checked={filter === 'all'}
            onChange={handleFilterChange}
          />
          All
        </label>
        <label>
          <input
            type="radio"
            name="filter"
            value="completed"
            checked={filter === 'completed'}
            onChange={handleFilterChange}
          />
          Completed
        </label>
        <label>
          <input
            type="radio"
            name="filter"
            value="uncompleted"
            checked={filter === 'uncompleted'}
            onChange={handleFilterChange}
          />
          Uncompleted
        </label>
      </div>
      <TaskName tasks={filteredTasks} setTasks={setTasks} />
      <Footer
        completedTasks={tasks.filter(task => task.done).length}
        totalTasks={tasks.length}
      />
    </div>
  );
}
