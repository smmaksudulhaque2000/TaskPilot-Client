import { Helmet } from "react-helmet";
import Loading from "../../Components/Loading";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const AllTask = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: alltask,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["publicTasklist"],
    queryFn: async () => {
      const response = await axiosPublic.get("/alltask");
      return response.data;
    },
  });

  if (isLoading) return <Loading></Loading>;

  if (error)
    return (
      <div className="text-center text-red-500 text-2xl">
        Error fetching classes
      </div>
    );
  console.log(alltask);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>TaskPilot | All Task</title>
      </Helmet>
      <h3>mallu mallu</h3>
    </div>
  );
};

export default AllTask;
