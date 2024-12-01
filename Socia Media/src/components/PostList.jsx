import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import Welcome from "./Welcome";
import LoadSpinner from "./LoadSpinner";

const PostList = () => {
  const { postList } = useContext(PostListData);
  const { addInitialPosts } = useContext(PostListData);
  const [fetching, setFetching] = useState(false);
  useEffect(() => {
    setFetching(true);

    const controller = AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });
    return () => {
      console.log("Clearing UseEffect"); //test console
      controller.abort();
    };
  }, []);

  //const handleGetPostClick = () => {};

  return (
    <>
      {fetching && <LoadSpinner />}
      {!fetching && postList.length === 0 && <Welcome />}
      {!fetching &&
        postList.map((post) => <Post post={post} key={post.id}></Post>)}
    </>
  );
};
export default PostList;
