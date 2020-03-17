// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
const [comments, setComments] = useState(props.comments)
const [newComment, setNewComment] = useState("")

const changeComment = event => setNewComment(event.target.value)

const submitComment = event => {
  event.preventDefault()
  let c = {
    username:"Nina",
    text:newComment
  }
  setComments([...comments, c])
  setNewComment("")
  }
  return (
    <div>
      {comments.map((comment, index) => {
        return <Comment key={index} comment={comment}/>
      })}
      <CommentInput submitComment={submitComment} changeComment={changeComment} comment={newComment} />
    </div>
  );
};

export default CommentSection;
