import { useContext } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PostList as PostListData } from "../store/post-list-store";

function Post({ post }) {
  const { deletePost } = useContext(PostListData);

  return (
    <div className="card post-card" style={{ width: "28rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <RiDeleteBin6Line />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge rounded-pill text-bg-success hash">
            {tag}
          </span>
        ))}
      </div>
      <div className="alert alert-success reac" role="alert">
        Your post has reached by {post.reactions.likes} peoples
      </div>
    </div>
  );
}
export default Post;
