import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { FiSend } from "react-icons/fi";

const AddTask = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const currentTime = new Date().toISOString();
    const taskData = {
      ...data,
      name: user?.displayName,
      email: user?.email,
      createdAt: currentTime,
    };

    axiosSecure.post("/tasks", taskData).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Request Successful",
          text: "Your Task has been Added successfully!",
        });
        navigate("/alltasks");
        reset({
          title: "",
          description: "",
          status: "To-Do",
          deadline: "",
        });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>EduSphere | Add Class</title>
      </Helmet>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-lg font-medium text-gray-700">
            Title
          </label>
          <input
            id="title"
            type="text"
            {...register("title", { required: "Title is required", maxLength: { value: 50, message: "Maximum 50 characters allowed" } })}
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-lg"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
        </div>

        <div>
          <label htmlFor="description" className="block text-lg font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            {...register("description", { maxLength: { value: 200, message: "Maximum 200 characters allowed" } })}
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-lg"
          ></textarea>
          {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
        </div>

        <div>
          <label htmlFor="status" className="block text-lg font-medium text-gray-700">
            Status
          </label>
          <select
            id="status"
            {...register("status", { required: "Status is required" })}
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-lg"
          >
            <option value="To-Do">To-Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
          {errors.status && <p className="text-red-500 text-sm">{errors.status.message}</p>}
        </div>

        <div>
          <label htmlFor="deadline" className="block text-lg font-medium text-gray-700">
            Deadline
          </label>
          <input
            id="deadline"
            type="date"
            {...register("deadline", { required: "Deadline is required" })}
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-lg"
          />
          {errors.deadline && <p className="text-red-500 text-sm">{errors.deadline.message}</p>}
        </div>

        <div>
          <label htmlFor="name" className="block text-lg font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={user?.displayName || ""}
            readOnly
            className="mt-2 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm sm:text-lg"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-lg font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={user?.email || ""}
            readOnly
            className="mt-2 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm sm:text-lg"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="inline-flex items-center justify-center w-full px-6 py-3 text-lg font-medium text-white bg-purple-600 rounded-md shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            <FiSend className="mr-2" /> Add Class
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;