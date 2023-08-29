import React, { useEffect, useState } from "react";
import "./_comments.scss";
import Comment from "../comment/Comment";
import { useDispatch, useSelector } from "react-redux";
import { addComment, getCommentsOfVideoById } from "../../Redux/actions/comments.action";

function Comments({videoId, totalComments}) {
  const dispatch = useDispatch();
  useEffect(()=>{
  dispatch(getCommentsOfVideoById(videoId))
  },[videoId, dispatch])

  const comments = useSelector(state=>state.commentList.comments)
  const[text, setText] = useState('')
  const _comments = comments?.map(comment=>comment.snippet.topLevelComment.snippet) 
  const handleComments = (e) => {
    e.preventDefault();
    if(text.length === 0) return 
    dispatch(addComment(videoId, text ))
  
  };
  return (
    <div className="comments">
      <p>{totalComments} Comments</p>
      <div className="comments__form d-flex 1-100 my-2">
        <img
          src="https://lh3.googleusercontent.com/a/AAcHTtcJd5Af9JghwtlsKggJek5nsXKeGKJLAvpLwDgCibMCn_BK=s96-c"
          alt=""
          className="rounded-circle mr-3"
        /> &nbsp;&nbsp;&nbsp;&nbsp;
        <form onSubmit={handleComments} className="d-flex flex-grow-1">
          <input
            type="text"
            placeholder="Write a comment..."
            className="flex-grow-1"
            value={text}
            onChange={e=>setText(e.target.value)}
          />
          <button className="border-0 p-2">Comment</button>
        </form>
      </div>

      <div className="comments__list">
        {_comments?.map((comment, i) => (
          <Comment comment={comment} key={i}/>
        ))}
      </div>
    </div>
  );
}

export default Comments;
