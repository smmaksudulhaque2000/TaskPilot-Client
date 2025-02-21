import { Helmet } from "react-helmet";
import Loading from "../../Components/Loading";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { MdOutlineDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import { FaEdit, FaRegEye } from "react-icons/fa";
import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { AuthContext } from "../../providers/AuthProvider";

const AllTask = () => {
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth(AuthContext);
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMOpen, setIsMOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "",
  });

  // Fetch tasks
  const {
    refetch,
    data: tasks,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["publicTasklist"],
    queryFn: async () => {
      const response = await axiosSecure.get(`/tasks?email=${user?.email}`);
      return response.data;
    },
  });

  // Update task status
  const updateTaskStatus = useMutation({
    mutationFn: async ({ taskId, status }) => {
      await axiosSecure.patch(`/tasks/${taskId}`, { status });
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
    updateTaskStatus.mutate({
      taskId: draggableId,
      status: destination.droppableId,
    });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          axiosSecure.delete(`/task/${id}`).then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your item has been deleted.", "success");
            }
          });
        } catch (error) {
          console.error("Error removing item:", error);
        }
      }
    });
  };

  const handleEdit = (task) => {
    setCurrentTask(task);
    setFormData({
      title: task.title,
      description: task.description,
      status: task.status,
    });
    setIsModalOpen(true);
  };

  const handleDetails = (task) => {
    setCurrentTask(task);
    
    setIsMOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdateTask = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosSecure.patch(
        `/task/${currentTask._id}`,
        formData
      );
      console.log("Update response:", response.data);
      console.log("Update response:", formData);
      refetch();
      setIsModalOpen(false);
      Swal.fire("Updated!", "Your task has been updated.", "success");
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };


  if (isLoading) return <Loading />;
  if (error)
    return (
      <div className="text-center text-red-500 text-2xl">
        Error fetching tasks
      </div>
    );

  // Categorize tasks
  const taskCategories = {
    "To-Do": tasks.filter((task) => task.status === "To-Do"),
    "In Progress": tasks.filter((task) => task.status === "In Progress"),
    Done: tasks.filter((task) => task.status === "Done"),
  };

  const getDeadlineColor = (deadline) => {
    const today = new Date();
    const taskDeadline = new Date(deadline);
    return taskDeadline < today ? "text-red-500" : "text-green-500";
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>TaskPilot | All Task</title>
      </Helmet>
      <h3 className="text-3xl font-bold text-center py-4">
        Manage Your Tasks Here
      </h3>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex flex-col lg:flex-row gap-4 p-4">
          {Object.entries(taskCategories).map(([status, tasks]) => (
            <Droppable key={status} droppableId={status}>
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="flex-1 bg-gray-100 p-4 rounded-lg min-h-screen"
                >
                  <h2 className="text-xl font-bold mb-4">{status}</h2>
                  {tasks.map((task, index) => (
                    <Draggable
                      key={task._id}
                      draggableId={task._id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="bg-white p-4 mb-2 rounded shadow cursor-grab user-select-none"
                        >
                          <div className="flex flex-col">
                            <span className="font-bold text-xl">{task.title}</span>
                            <div className="flex justify-between items-center">
                              <div className="flex flex-col">
                                <span className="text-gray-600 py-2">{task.description}</span>
                                <span className="text-gray-600 font-semibold">
                                  {new Date(task.createdAt).toLocaleDateString(
                                    "en-US",
                                    {
                                      weekday: "long",
                                      year: "numeric",
                                      month: "long",
                                      day: "numeric",
                                    }
                                  )}{" "}
                                  at{" "}
                                  {new Date(task.createdAt).toLocaleTimeString(
                                    "en-US",
                                    {
                                      hour: "2-digit",
                                      minute: "2-digit",
                                      second: "2-digit",
                                    }
                                  )}
                                </span>
                              </div>
                              <div className="bg-gray-100 p-2 rounded font-bold">
                                <span
                                  className={getDeadlineColor(task.deadline)}
                                >
                                  {task.deadline}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-between p-4">
                            <button onClick={() => handleEdit(task)}>
                              <FaEdit className="text-2xl text-gray-600"/>
                            </button>
                            <button onClick={() => handleDetails(task)}>
                            <FaRegEye className="text-2xl" />
                            </button>
                            <button onClick={() => handleDelete(task._id)}>
                              <MdOutlineDeleteForever className="text-3xl text-red-600" />
                            </button>
                          </div>
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

      {isModalOpen && currentTask && (
        <div className="fixed inset-0 bg-gray-200 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-4xl">
            <h2 className="text-xl font-bold mb-4">Edit Task</h2>
            <form onSubmit={handleUpdateTask}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                  maxLength="50"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                  maxLength="200"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                >
                  <option value="To-Do">To-Do</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Deadline
                </label>
                <input
                  type="date"
                  defaultValue={currentTask.deadline}
                  className="w-full p-2 border rounded bg-gray-100"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Created At
                </label>
                <input
                  type="text"
                  defaultValue={currentTask.createdAt}
                  className="w-full p-2 border rounded bg-gray-100"
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="text"
                  defaultValue={currentTask.email}
                  className="w-full p-2 border rounded bg-gray-100"
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  defaultValue={currentTask.name}
                  className="w-full p-2 border rounded bg-gray-100"
                  readOnly
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-outline border-2 border-b-4 px-4 rounded-lg hover:bg-gray-400"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {isMOpen && currentTask && (
        <div className="fixed inset-0 bg-gray-200 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-4xl">
            <h2 className="text-xl font-bold mb-4">Edit Task</h2>
            <form onSubmit={handleUpdateTask}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Title</label>
                <input
                  type="text"
                  name="title"
                  value={currentTask.title}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                  maxLength="50"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={currentTask.description}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                  maxLength="200"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Status</label>
                <select
                  name="status"
                  value={currentTask.status}
                  className="w-full p-2 border rounded"
                  disabled
                >
                  <option value="To-Do">To-Do</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Deadline
                </label>
                <input
                  type="date"
                  defaultValue={currentTask.deadline}
                  className="w-full p-2 border rounded bg-gray-100"
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Created At
                </label>
                <input
                  type="text"
                  defaultValue={currentTask.createdAt}
                  className="w-full p-2 border rounded bg-gray-100"
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="text"
                  defaultValue={currentTask.email}
                  className="w-full p-2 border rounded bg-gray-100"
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  defaultValue={currentTask.name}
                  className="w-full p-2 border rounded bg-gray-100"
                  readOnly
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllTask;
