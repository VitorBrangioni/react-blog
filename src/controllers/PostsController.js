import HttpRequest from "../services/http-request";

class PostsController {

  static getPosts() {
    return HttpRequest.get("5be5e3fa2f000082000fc3f8").then((res) => {
      return res.data;
    });
  }

  static getPostsByAuthor(authorId) {
    
  }

}

export default PostsController;


