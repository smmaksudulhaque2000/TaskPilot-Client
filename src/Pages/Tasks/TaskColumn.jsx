import DropArea from "./DropArea";
import TaskCard from "./TaskCard";
import React from "react";

const TaskColumn = ({ tasks, status, title, setActiveTask, onDrop }) => {
  console.log(tasks);

  return (
    <div>
        <DropArea onDrop={()=> onDrop(status, 0)}></DropArea>
      {tasks.map((task, index) => (
        <React.Fragment key={index}>
          <TaskCard
            title={task.title}
            index={index}
            status={status}
            id={task._id}
            setActiveTask={setActiveTask}
          ></TaskCard>
          <DropArea onDrop={()=> onDrop(status, index+1)}></DropArea>
        </React.Fragment>
      ))}
    </div>
  );
};

export default TaskColumn;
