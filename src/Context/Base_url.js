import axios from "axios";

const base_url = "https://bursary-form-system-backend.onrender.com";
const instance = axios.create({
  withCredentials: true,
  baseURL: base_url,
});
export default instance;
