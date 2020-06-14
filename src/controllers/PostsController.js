import HttpRequest from "../services/http-request";

class PostsController {

  static getPosts() {
    return HttpRequest.get("http://www.mocky.io/v2/5be5e3fa2f000082000fc3f8").then((res) => {
      console.log(res.data);
      return res.data;
    });
  }
}

export default PostsController;


