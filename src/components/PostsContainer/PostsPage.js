//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import data from "../../dummy-data"

const PostsPage = () => {
  // set up state for your data
  const [posts, setPosts] =useState(data)
  return (
    <div className="posts-container-wrapper">
      {posts.map(currentPost => <Post post= {currentPost} />)}
    </div>
  );
};

export default PostsPage;

