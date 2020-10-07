import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props.data;
  // console.log(props.likePost)

  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! */}

      {
      props.data.map((content, index) => {
        return (<Post content={content} key={index} likePost={props.likePost} />)
      })
      }

    </div>
  );
};

export default Posts;
