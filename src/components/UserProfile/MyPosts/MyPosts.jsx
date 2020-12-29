import React from 'react';
import Post from './Post/Post';
import NewPost from "./NewPost/NewPost";

// const PostsData = [
//   {
//     id: 1,
//     heading: "Words of the day",
//     content: "Flexible Thinking in a Constantly Changing World"},
//   {
//     id: 2,
//     heading: "Some words",
//     content: "The default network governs our interior mental life—the dialogue we have with ourselves, both consciously and subconsciously."
//   },
//   // {id: 3, content: "Ezra"},
//   // {id: 4, content: "Evgenia"},
//   // {id: 5, content: "Lars"}
// ];

const MyPosts = (props) => {
  // debugger;
  const PostsDataMap = props.Posts.PostsData.map( post => <Post heading={post.heading } content={post.content} />);
  // const PostsDataMap = props.PostsData.map( post => <Post heading={post.heading } content={post.content} />);
  return (
    <div>
      <h2>My posts</h2>
      <NewPost />
      {PostsDataMap}
      {/*<Post heading={PostsData[0].heading} content={PostsData[0].content} />*/}
      {/*<Post heading={PostsData[1].heading} content={PostsData[1].content} />*/}
    </div>
  )
}

export default MyPosts;