import React from 'react';
import Post from './Post/Post';
import { NewPost } from "./NewPost/NewPost";

const MyPosts = (props) => {
  // debugger
  const PostsDataMap = props.Posts.PostsData.map( post => <Post heading={post.heading } content={post.content} />);
  return (
    <div>
      <h2>My posts</h2>
      {/*<NewPost AddPostFunc={props.AddPostFunc} AddSymbFunc={props.AddSymbFunc} newPostText={props.Posts}/>*/}
      <NewPost AddPostFunc={props.AddPostFunc} AddSymbFunc={props.AddSymbFunc} newPostText={props.Posts}/>
      {PostsDataMap}
    </div>
  )
}

export default MyPosts;