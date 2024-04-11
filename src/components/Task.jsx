import { useState } from "react";

import Form from "./Form";
import TaskName from "./TaskName";
import Footer from "./Footer";

export default function Task() {
  const [tasks, setTasks] = useState([]);
  const completedTasks = tasks.filter((task) => task.done).length;
  const totalTasks = tasks.length;
  return (
    <div>
      <Form tasks={tasks} setTasks={setTasks} />
      <TaskName tasks={tasks} setTasks={setTasks} />
      <Footer completedTasks={completedTasks} totalTasks={totalTasks} />
    </div>
  );
}
