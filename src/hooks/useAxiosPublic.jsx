import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://task-pilot-server-taupe.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
