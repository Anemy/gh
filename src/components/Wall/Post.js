import React from 'react';

import './Post.css';

const Post = (props) => (
  <div className={'post ' + (props.post.familyPost ? 'post-family' : '')}>
    <div className="post-text" dangerouslySetInnerHTML={{__html: props.post.text}} />
    <div className="post-author">{props.post.author}</div>
    <div className="post-date">{props.post.date}</div>
  </div>
);

export default Post;
