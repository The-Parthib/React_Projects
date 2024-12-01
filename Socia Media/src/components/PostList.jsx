import Post from "./Post";
import Welcome from "./Welcome";
import LoadSpinner from "./LoadSpinner";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const postList = useLoaderData();


  //const handleGetPostClick = () => {};

  return (
    <>
      {postList.length === 0 && <Welcome />}
      {postList.map((post) => <Post post={post} key={post.id}></Post>)}
    </>
  );
};

export const postLoader = ()=>{
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts
    });
}

export default PostList;
