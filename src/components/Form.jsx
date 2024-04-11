import React from "react";
import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ tasks, setTasks }) {
  // const [task, setTask] = useState("");
  const [task, setTask] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTasks([...tasks, task]);
    setTask({ name: "", done: false });
  }
  return (
    <form className={styles.taskform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          onChange={(e) => setTask({ name: e.target.value, done: false })}
          value={task.name}
          type="text"
          placeholder="Enter task name"
        />
        <button className={styles.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
