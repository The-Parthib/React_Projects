import { createContext, useReducer } from "react";

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Delhi",
    body: "Hii, Friends, I am going to Delhi for smart india Hackathon",
    reactions: 7,
    userId: "user-9",
    tags: ["#SIH2024", "#hackathon"],
  },
  {
    id: "2",
    title: "Going to Goa",
    body: "Hii, Friends, I am going to Goa for smart india Hackathon",
    reactions: 2,
    userId: "user-12",
    tags: ["#Fun", "#Beach"],
  },
];

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    )
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
    
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    []
  );

  const addPost = (userId, title, reactions, tags, body) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: title,
        body: body,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts: posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        addInitialPosts: addInitialPosts,
        deletePost: deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
