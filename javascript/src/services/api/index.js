import axios from "axios";

const api = axios.create({
  baseURL: "https://6217cc431a1ba20cba912f25.mockapi.io"
});

export default api;