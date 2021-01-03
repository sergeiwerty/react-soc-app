import React from "react";

export let textAreaValue = React.createRef();

let ReadInputSymbols = (props) => {

  let addSymbols = () => {
    // console.log(textAreaValue.current.value);
    // debugger;
    props.ReadInputSymbols(textAreaValue.current.value);
    // props.ReadInputSymbols("");
 };
 return (
   <textarea id="textArea" onChange={ addSymbols } ref={textAreaValue} value={props.newPostText.newPostText}/>
  // <textarea id="textArea" onChange={ addSymbols } ref={textAreaValue} value={props.newPostText}/>
   );
};

export default ReadInputSymbols;

// let popUpMessage = React.createRef();
{/*<textarea id="textArea" ref={popUpMessage}/>*/}