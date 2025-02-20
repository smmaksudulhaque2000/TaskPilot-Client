import { Helmet } from "react-helmet";
import Loading from "../../Components/Loading";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const AllTask = () => {
  const axiosPublic = useAxiosPublic();
  const queryClient = useQueryClient();

  // Fetch tasks
  const { data: tasks, isLoading, error } = useQuery({
    queryKey: ["publicTasklist"],
    queryFn: async () => {
      const response = await axiosPublic.get("/tasks");
      return response.data;
    },
  });

  // Update task status
  const updateTaskStatus = useMutation({
    mutationFn: async ({ taskId, status }) => {
      await axiosPublic.patch(`/tasks/${taskId}`, { status });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["publicTasklist"]);
    },
  });

  // Handle drag and drop
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination || destination.droppableId === source.droppableId) return;
    
    // Update status in database
    updateTaskStatus.mutate({ taskId: draggableId, status: destination.droppableId });
  };

  if (isLoading) return <Loading />;
  if (error) return <div className="text-center text-red-500 text-2xl">Error fetching tasks</div>;

  // Categorize tasks
  const taskCategories = {
    "To-Do": tasks.filter((task) => task.status === "To-Do"),
    "In Progress": tasks.filter((task) => task.status === "In Progress"),
    "Done": tasks.filter((task) => task.status === "Done"),
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>TaskPilot | All Task</title>
      </Helmet>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex justify-between gap-4 p-4">
          {Object.entries(taskCategories).map(([status, tasks]) => (
            <Droppable key={status} droppableId={status}>
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="flex-1 bg-gray-100 p-4 rounded-lg min-h-[100px]"
                >
                  <h2 className="text-xl font-bold mb-4">{status}</h2>
                  {tasks.map((task, index) => (
                    <Draggable key={task._id} draggableId={task._id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="bg-white p-2 mb-2 rounded shadow cursor-grab user-select-none"
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
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default AllTask;
