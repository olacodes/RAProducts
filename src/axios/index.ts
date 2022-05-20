import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://54.186.232.155:3005/api",
  headers: {
    Accept: "application/json",
  },
});

export const handleAxiosError = (error: unknown) => {
  let errorResponse;
  if (Axios.isAxiosError(error)) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.data) {
        errorResponse = error.response.data.error || error.response.data;
      }
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
      errorResponse = `Unusual Error: ${error.message}`;
    }
  } else {
    errorResponse = "Something went wrong, please try again.";
  }
  console.log(errorResponse, "ErrorResponse");
  return errorResponse;
};

export default axios;
