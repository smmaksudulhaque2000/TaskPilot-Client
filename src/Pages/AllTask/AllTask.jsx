import { Helmet } from "react-helmet";
import Loading from "../../Components/Loading";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const AllTask = () => {
  const axiosPublic = useAxiosPublic();
  const queryClient = useQueryClient();

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

  const updateTaskStatus = useMutation({
    mutationFn: async ({ taskId, status }) => {
      const response = await axiosPublic.patch(`/tasks/${taskId}`, { status });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries("publicTasklist");
    },
  });

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const newStatus = destination.droppableId;
    updateTaskStatus.mutate({ id: draggableId, status: newStatus });
  };

  if (isLoading) return <Loading></Loading>;

  if (error)
    return (
      <div className="text-center text-red-500 text-2xl">
        Error fetching tasks
      </div>
    );

  const todoTasks = tasks.filter((task) => task.status === "To-Do");
  const inProgressTasks = tasks.filter((task) => task.status === "In Progress");
  const doneTasks = tasks.filter((task) => task.status === "Done");

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>TaskPilot | All Task</title>
      </Helmet>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex justify-between gap-4 p-4">
          <Droppable droppableId="To-Do" isDropDisabled={false}>
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="flex-1 bg-gray-100 p-4 rounded-lg"
              >
                <h2 className="text-xl font-bold mb-4">To-Do</h2>
                {todoTasks.map((task, index) => (
                  <Draggable key={task._id} draggableId={task._id} index={index} isDragDisabled={false}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="bg-white p-2 mb-2 rounded shadow"
                      >
                        {task.title}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <Droppable droppableId="In Progress" isDropDisabled={false}>
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="flex-1 bg-gray-100 p-4 rounded-lg"
              >
                <h2 className="text-xl font-bold mb-4">In Progress</h2>
                {inProgressTasks.map((task, index) => (
                  <Draggable key={task._id} draggableId={task._id} index={index} isDragDisabled={false}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="bg-white p-2 mb-2 rounded shadow"
                      >
                        {task.title}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <Droppable droppableId="Done" isDropDisabled={false}>
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="flex-1 bg-gray-100 p-4 rounded-lg"
              >
                <h2 className="text-xl font-bold mb-4">Done</h2>
                {doneTasks.map((task, index) => (
                  <Draggable key={task._id} draggableId={task._id} index={index} isDragDisabled={false}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="bg-white p-2 mb-2 rounded shadow"
                      >
                        {task.title}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </div>
  );
};

export default AllTask;