import React from "react";
//import styles from "./NewPost.module.css";
import SubmitPostButton from "./SubmitPost/SubmitPostButton";
import ReadInputSymbols from "./ReadInputSymbols/ReadInputSymbols";

// let popUpMessage = React.createRef();

export const NewPost = (props) => {
  // debugger
  return (
    <article>
      {/*<textarea id="textArea" ref={popUpMessage}/>*/}
      <ReadInputSymbols ReadInputSymbols={props.AddSymbFunc} newPostText={props.newPostText}/>
      <SubmitPostButton AddPostFunc={props.AddPostFunc} />
      {/*<ReadInputSymbols ReadInputSymbols={props.AddSymbFunc} inputedValue={popUpMessage}/>*/}
      {/*<SubmitPostButton AddPostFunc={props.AddPostFunc} post={popUpMessage}/>*/}
    </article>
  );
};




// export const NewPost = (props) => {
//   return (
//     <article>
//       <textarea id="textArea" ref={popUpMessage}/>
//       <SubmitPostButton AddPostFunc={props.AddPostFunc} post={popUpMessage}/>
//     </article>
//   );
// };

//export default NewPost;
