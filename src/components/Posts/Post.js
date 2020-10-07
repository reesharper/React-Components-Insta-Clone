import React from 'react';
import Comments from '../Comments/Comments';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';

const Post = props => {
  // 🔥 Make sure the parent of Post is passing the right props!
  const { post, likePost } = props.content;

  return (
    <div className='post-border'>
      <PostHeader
        username={props.content.username}
        thumbnailUrl={props.content.thumbnailUrl}
      />
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={props.content.imageUrl}
        />
      </div>
      {/* Is LikeSection getting all the props it needs to work correctly? */}
      <LikeSection likePost={() => props.likePost(props.content.id)}
      numberOfLikes={props.content.likes}/>
      {/* Comments also wants its props! */}
      <Comments comments = {props.content.comments}/>
    </div>
  );
};

export default Post;
