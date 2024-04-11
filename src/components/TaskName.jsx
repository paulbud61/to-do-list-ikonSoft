import React from "react";
import TaskItem from "./TaskItem";
import styles from "./taskName.module.css";

export default function TaskName({ tasks, setTasks }) {
  const sortedTasks = tasks
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.list}>
      {sortedTasks.map((item) => (
        <TaskItem
          key={item.name}
          item={item}
          tasks={tasks}
          setTasks={setTasks}
        />
      ))}
    </div>
  );
}
