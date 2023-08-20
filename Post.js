import React from "react";
import "./Post.css";

function Post(props) {
  const { username, message, message1, timestamp } = props;

  return (
    <div className="post">
      <p className="post-username">{username}</p>
      <p className="post-message">{message}</p>   
      <p className="post-message1">{message1}</p> 
      <p className="post-timestamp">{timestamp.toLocaleString()}</p>
    </div>
  );
}

export default Post;