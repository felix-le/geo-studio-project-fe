import axios from 'axios';
const axiosInstance = axios.create({
  baseURL: 'https://geostudiobe.herokuapp.com',
  responseType: 'json',
});

// add content type default header
axiosInstance.interceptors.request.use((request) => {
  if (!request.headers['Content-type']) {
    request.headers['Content-Type'] = 'application/json';
  }
  return request;
});

// get data from api default
axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  // handle error
  (error) => {
    const { response } = error;
    // reject promise
    // for development
    console.log(error);
    return Promise.reject(response);
  }
);

const get = async (path, queryParams = '') => {
  return axiosInstance.get(`${path}${queryParams ? '?' + queryParams : ''}`);
};
export { get };
