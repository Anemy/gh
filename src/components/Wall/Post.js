import React from 'react';

import './Post.css';

const Post = (props) => (
  <div className="post">
    <div className="post-text">{props.post.text}</div>
    <div className="post-author">{props.post.author}</div>
    <div className="post-date">{props.post.date}</div>
  </div>
);

export default Post;
