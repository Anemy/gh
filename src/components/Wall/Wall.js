import React from 'react';

import './Wall.css';

import Post from './Post';

import posts from '../../data/posts';

const renderPosts = () => {
  return posts.map((post, index) => <Post key={index} post={post} />);
};

const Wall = () => (
  <div className="wall">
    {renderPosts()}
  </div>
);

export default Wall;
