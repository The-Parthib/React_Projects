import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";

const PostList = () => {
  const { postList } = useContext(PostListData);
  return (
    <>
    {postList.map( (post) => <Post post={post} key={post.id}></Post>)}
    </>
  );
};
export default PostList;
