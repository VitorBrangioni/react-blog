import HttpRequest from "../services/http-request";

class AuthorController {

  static get() {
    return HttpRequest.get("5be5e3ae2f00005b000fc3f6").then((res) => {
      return res.data;
    });
  }
}

export default AuthorController;


