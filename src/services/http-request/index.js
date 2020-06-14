import Axios from "axios";

const baseURL = "http://www.mocky.io/v2/";
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