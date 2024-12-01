import { Form, redirect } from "react-router-dom";
import { PostList as PostListData } from "../store/post-list-store";
import { useContext, useRef } from "react";

function CreatePost() {
  const { addPost } = useContext(PostListData);

  const handleSubmit = (event) => {};

  return (
    <Form method="POST" className="create-post">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User ID :
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          name="userId"
          placeholder="Put Your User Id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title : )
        </label>
        <input
          type="text"
          name="title"
          id="title"
          className="form-control"
          placeholder="How are u feeling today"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Reaction :
        </label>
        <input
          type="text"
          name="reactions"
          className="form-control"
          id="reactions"
          placeholder="reaction 1 , 2 , 3 , 4"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Hashtas :
        </label>
        <input
          type="text"
          name="tags"
          className="form-control"
          id="tags"
          placeholder="#... , #..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Details
        </label>
        <textarea
          type="text"
          name="body"
          className="form-control"
          placeholder="say something"
          id="body"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
}

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });
  return redirect("/");
}

export default CreatePost;
