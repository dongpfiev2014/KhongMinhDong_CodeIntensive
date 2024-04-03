import axios from "axios";

const axiosClient = axios.create({});

axiosClient.interceptors.request.use(async (config) => {
  config.baseURL = `https://jsonplaceholder.typicode.com`;
  config.headers = {
    ...config.headers,
  };
  //   config.data;
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response.status === 200 && response.data) {
      return response.data;
    } else {
      console.log(response);
      throw new Error("Error API");
    }
  },
  (error) => {
    console.log(error);
    throw new Error("Error API", error);
  }
);

export default axiosClient;
