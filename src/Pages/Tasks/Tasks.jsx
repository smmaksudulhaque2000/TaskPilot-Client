import React, { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Components/Loading";
import TaskColumn from "./TaskColumn";

const Tasks = () => {
  const axiosPublic = useAxiosPublic();

  const [activeTask, setActiveTask] = useState(null);



  const {
    data: tasks,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["publicTasklist"],
    queryFn: async () => {
      const response = await axiosPublic.get("/tasks");
      return response.data;
    },
  });



  const onDrop = (status, position) => {
    console.log(
      `${activeTask} is going to place into ${status} at ${position}`
    );
    if (activeTask == null || activeTask === undefined) return;
  const taskToMove = tasks[activeTask];
  const updatedTasks = tasks.filter((task, index) => index !== activeTask)

  updatedTasks.splice(position, 0, {
    ...taskToMove,
    status: status
  })
  setTasks(updatedTasks)
  };

  


  

  if (isLoading) return <Loading></Loading>;

  if (error)
    return (
      <div className="text-center text-red-500 text-2xl">
        Error fetching tasks
      </div>
    );

  console.log(tasks);

  return (
    <div className="flex justify-between gap-2">
      <div className="border-2 border-red-300 w-full">
        <h3 className="font-bold">To-Do</h3>
        <TaskColumn
          title="To-Do"
          tasks={tasks.filter((task) => task.status === "To-Do")}
          status="To-Do"
          setActiveTask={setActiveTask}
          onDrop={onDrop}
        ></TaskColumn>
      </div>

      <div className="border-2 border-red-300 w-full">
        <h3 className="font-bold">In Progress</h3>
        <TaskColumn
          title="In Progress"
          tasks={tasks.filter((task) => task.status === "In Progress")}
          status="In Progress"
          setActiveTask={setActiveTask}
          onDrop={onDrop}
        ></TaskColumn>
      </div>

      <div className="border-2 border-red-300 w-full">
        <h3 className="font-bold">Done</h3>
        <TaskColumn
          title="Done"
          tasks={tasks.filter((task) => task.status === "Done")}
          status="Done"
          setActiveTask={setActiveTask}
          onDrop={onDrop}
        ></TaskColumn>
      </div>
      <h1>Active Card : {activeTask}</h1>
    </div>
  );
};

export default Tasks;
