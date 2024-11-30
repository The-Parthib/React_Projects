import { PostList as PostListData } from "../store/post-list-store";
import { useContext, useRef } from "react";

function CreatePost() {

  const {addPost} = useContext(PostListData);

  const userIdElement = useRef();
  const titleElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();
  const bodyElement= useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const title = titleElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split("");
    const body = bodyElement.current.value;

    userIdElement.current.value = "";
    titleElement.current.value="";
    reactionsElement.current.value="";
    tagsElement.current.value="";
    bodyElement.current.value="";

    addPost(userId,title,reactions,tags,body)
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlfor="userId" className="form-label">
          User ID :
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          ref={userIdElement}
          placeholder="Put Your User Id"
        />
      </div>

      <div className="mb-3">
        <label htmlfor="title" className="form-label">
          Post Title : )
        </label>
        <input
          type="text"
          ref={titleElement}
          className="form-control"
          id="title"
          placeholder="How are u feeling today"
        />
      </div>

      <div className="mb-3">
        <label htmlfor="reactions" className="form-label">
          Reaction :
        </label>
        <input
          type="text"
          ref={reactionsElement}
          className="form-control"
          id="reactions"
          placeholder="reaction 1 , 2 , 3 , 4"
        />
      </div>

      <div className="mb-3">
        <label htmlfor="tags" className="form-label">
          Hashtas :
        </label>
        <input
          type="text"
          ref={tagsElement}
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
          ref={bodyElement}
          className="form-control"
          placeholder="say something"
          id="body"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
}

export default CreatePost;
