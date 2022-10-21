import Axios from "axios";

const axiosClient = async (options:{url: string, data?: string, method?: string, cancelToken?: any }) => {
  let { url, data, method, cancelToken } = options;
  method = method?.toUpperCase() || "GET";
  if (!url)
    throw new Error("url is required");
  if (method !== "GET" && method !== "DELETE" && !data)
    throw new Error("data is required");
  try {
    const response = await Axios({
      url,
      data,
      method,
      cancelToken,
    });
    return response.data;
  } catch (error) {
    if (Axios.isCancel(error)) {
      console.log("Request canceled", error.message);
    }
    throw error;
  }
};

export const requestToken = () => Axios.CancelToken;

export const isCancelError = (error: any) => Axios.isCancel(error);

export default axiosClient;
