import axios from "axios";

axios.defaults.baseURL = "https://ci-drp-api-f5b03f3c5f4f.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;
