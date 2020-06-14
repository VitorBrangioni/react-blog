import Axios from "axios";

const baseURL = "/";
const axios = Axios.create({
  baseURL,
  timeout: 3000,
});

class HttpRequest {

  static get(endpoint) {
    return axios.get(endpoint);
  }

}

export default HttpRequest;